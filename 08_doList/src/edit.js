const clases = require('./clases.js');
const create = require('./create.js')

let container = document.querySelector('.container');
let containerProjectss = document.querySelector('.containerProjectss');
let containerToday = document.querySelector('.containerToday');
let projectNameEdit = document.querySelector('.projectNameEdit');
let guardarId=[]

//pone los datos en el formulario
function editHijo(elem){
	console.log(elem)
	//si la tarea tiene un Projecto aparece el nombre del projecto
	if(elem.project){
		projectNameEdit.innerText= elem.project
		console.log('editHIJO:' ,projectNameEdit.innerText)
	}else{
		projectNameEdit.innerText= '-'
	}
	let form = document.formularioEdit
	guardarId= elem.numId
	form.nameTaskEdit.value = elem.title
	form.descTaskEdit.value = elem.desc
	form.dateTaskEdit.value = elem.dueDate
}


//reemplaza la tarea vieja por la nueva
function editarTarea(e){
	e.preventDefault()
	
	let crearObjeto = crearObjetoEditado()
	clases.almacenar.forEach((elem,index,object)=>{
		//index es el n* de elemento, object hace refernciaal array recorrido
		if(guardarId==elem.numId){
			object.splice(index,1,crearObjeto);
			console.log(clases.almacenar);		
		}
	})
	//limpia el dom y vuelve todo actualizado

	limpiar()
	
	clases.almacenar.forEach(elem=>{
		create.mostrarDatos(elem)
	})



}
function limpiar(){
	container.innerHTML='<h2>Tareas</h2>';
	containerToday.innerHTML='<h2>Today</h2>';
containerProjectss.innerHTML='<h2>Project</h2>';
}
//crea el objeto con los datos editados y se los apsa a editar Tarea
function crearObjetoEditado(){
	let form = document.formularioEdit
	let infoName = form.nameTaskEdit.value;
	let infoTask = form.descTaskEdit.value;
	let infoDate = form.dateTaskEdit.value ? form.dateTaskEdit.value  : undefined;
	let numId = guardarId;
	let project;
	let elem;
	if(projectNameEdit.innerText!='-'){
		project=projectNameEdit.innerHTML;
		console.log('crearObjeto:', project)
	}
	if(project){
		 elem = new clases.TareaProject(numId,infoName,infoTask,infoDate,project);	
	}else{
		 elem = new clases.Tarea(numId,infoName,infoTask,infoDate);	
	}
	console.log(elem)
	console.log(clases.almacenar)
	return elem

}

exports.editarTarea = editarTarea
exports.editHijo = editHijo
