const clases = require('./clases.js');
const create = require('./create.js')
let container = document.querySelector('.container');
let guardarId=[]

//pone los datos en el formulario
function editHijo(elem){
	console.log(elem)
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
	container.innerText='';
	clases.almacenar.forEach(elem=>{
		create.mostrarDatos(elem)
	})



}

//crea el objeto con los datos editados y se los apsa a editar Tarea
function crearObjetoEditado(){
	let form = document.formularioEdit
	let infoName = form.nameTaskEdit.value;
	let infoTask = form.descTaskEdit.value;
	let infoDate = form.dateTaskEdit.value ? form.dateTaskEdit.value  : undefined;
	let numId = guardarId

	let elem = new clases.Tarea(numId,infoName,infoTask,infoDate)	
	
	return elem

}

exports.editarTarea = editarTarea
exports.editHijo = editHijo
