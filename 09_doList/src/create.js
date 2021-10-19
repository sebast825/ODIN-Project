const clases = require('./clases.js');
const container = document.querySelector('.container');
const containerProjectssSelect = document.querySelector('.containerProjectssSelect')
const containerProjectss = document.querySelector('.containerProjectss')
function getFormulario(e){
	e.preventDefault();
	//si es taabajo no la corre y hay quilombo 
	// divSelect.mostrarTareas()
	let infoName = this.nameTask.value;
	if (infoName=='') {return alert('nombre invalido')}
	let infoTask = this.descTask.value;
	let infoDate = this.dateTask.value ;
	let numId = crearId(clases.almacenar);
	// console.log(numId);
	let elem = new clases.Tarea();
	elem.setTitle = infoName;
	elem.setDesc = infoTask;
	elem.setId = numId;
	elem.setDueDate = infoDate
	elem.guardarInfo();
	// elem.guardarInfo();			
	 let info = elem.getLeer;
	// console.log(info)
	container.appendChild(elem.mostrarDatos)
	// divSelect.colocarTareaEn(info);
	
	
}

function createProject(e){
	e.preventDefault()
		
	let nameProject = this.nameProject.value
	let nameValido = verificarNombreProject(nameProject)
	if(!nameValido)return
	
	let project = new clases.Project()	
	project.setNumId = crearId(clases.almacenarProject)
	project.setNameProject = nameProject
	project.guardar()	
	
	console.log(project.getLeer);
	containerProjectssSelect.appendChild(project.setCreateSelect)
}

//recorre el array que se le pase para crear un id
function crearId(array){	
	let numId;
		if(array.length==0){
			numId= 0;
		}else{
			let lastId = array[array.length-1];			
			numId = parseInt(lastId.numId) +1	;		
		}
		return numId;
}

//verifica si el nombre del projecto existe
function verificarNombreProject(nameProject){
	let valido=true;
	clases.almacenarProject.forEach(elem=>{
		if(elem.nameProject==nameProject){
			alert('ya esxiste un proyecto con ese nombre')			
			valido=false			
		}
	})
	return valido
}


//muestra en el dom el projecto y sus tareas
function showTareaProject(nameProject){
	

	
	
   clases.almacenar.forEach(elem=>{
	   if(elem.project==nameProject){
		   let tarea = mostrarDatos(elem);
		//    containerProjectss.appendChild(tarea)
	   }
})
}

exports.getFormulario = getFormulario;
exports.createProject = createProject;

exports.showTareaProject = showTareaProject;

