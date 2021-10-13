
const clases = require('./clases.js');
const edit = require('./edit.js')
const fecha = require('./fecha.js')

// const index = require('./index.js')

let container = document.querySelector('.container');
let projectName = document.querySelector('.projectName');
let containerToday = document.querySelector('.containerToday');
let containerProjects = document.querySelector('.containerProjects');
let formularioEdit = document.querySelector('.formularioEdit');
let tareaProjectDom = document.querySelector('.tareaProject');
// const asd = index.
function getFormulario(e){
	e.preventDefault();
	
	let infoName = this.nameTask.value;
	if (infoName=='') {return alert('nombre invalido')}
	let infoTask = this.descTask.value;
	let infoDate = this.dateTask.value ? this.dateTask.value  : undefined;
	let numId = crearId();
	console.log(numId);
	let elem = new clases.Tarea(numId,infoName,infoTask,infoDate);
		
	elem.asd();			
	let info = elem.leer();
	mostrarDatos(info);
}

function crearId(){	
	let numId;
		if(clases.almacenar.length==0){
			numId= 0;
		}else{
			let lastId = clases.almacenar[clases.almacenar.length-1];			
			numId = parseInt(lastId.numId) +1	;		
		}
		return numId;
}

function mostrarDatos(elem){
	console.log(elem[0],elem[1])
	let cont = document.createElement('DIV')
	let nameTask = document.createElement('H2');
	let descTask = document.createElement('P');
	let btnDelete = document.createElement('button');
	let btnEdit = document.createElement('button');
	
	btnDelete.innerText='Delte'
	btnEdit.innerText = 'Edit'
	nameTask.innerText=elem.title;
	descTask.innerText = elem.desc;
	cont.appendChild(btnDelete);
	cont.appendChild(btnEdit)
	cont.appendChild(nameTask);
	cont.appendChild(descTask);

	
	//pone la tarea en today
	/////////////////////////////////////////////////////////////////
	//MAS ADELANTE MODIFICAR A QUE SE PONGA CUANDO CLIKIAS EN CONTENEDOR TODAY
	if(elem.dueDate!=undefined){
		let atr = fecha.htmlToday(elem.dueDate)
	if(atr){
		containerToday.appendChild(cont);
		
	}
	
	}
	//si el projecto tiene nombre se lo agrega al contenedor del projecto
	if(elem.project!=undefined){
		console.log('estamos creando cosas: ', elem.project)
		let nameActual = document.querySelector(`.${elem.project}`)
		nameActual.appendChild(cont)
	}else{
		container.appendChild(cont);
	}
	
	

	
	btnEdit.addEventListener('click',()=>{
		formularioEdit.style.visibility='visible';
		edit.editHijo(elem)

	})
	btnDelete.addEventListener('click',()=>{
		 container.removeChild(cont);
		
		removerHijo(elem);
	})	
	

}

function removerHijo(asd){
	clases.almacenar.forEach((elem,index,object)=>{
		//index es el n* de elemento, object hace refernciaal array recorrido
		if(asd.numId==elem.numId){
			console.log(elem)
			object.splice(index,1);
			console.log(clases.almacenar);		
		}
	})
}

///////////////////////////////////////////////////////////////////
//DESDE ACA ES PARA PROJECTO + HIJO
function createProject(e){
	console.log('asd')
	e.preventDefault()
	let nameProject = this.nameProject.value
	let project = new clases.Project(nameProject)
	project.guardar()	
	mostrarProject(project)
}

function mostrarProject(project){
	let cont = document.createElement('DIV')	
	let h2 = document.createElement('H2');
	let btnAgregar = document.createElement('button')
	// console.log('jajaj')
	btnAgregar.innerText='+'
	// btnAgregar.setAttribute('type','submit')
	cont.setAttribute('name',project.nameProject)
	cont.classList.add(project.nameProject)
	h2.innerText = project.nameProject;
	
	cont.appendChild(h2)
	cont.appendChild(btnAgregar)
	containerProjects.appendChild(cont);
	
	btnAgregar.addEventListener('click',()=>{
		console.log('visible')
		tareaProjectDom.style.visibility='visible';
		projectName.innerText= project.nameProject
	})
}

function tareaProject(e){
	e.preventDefault();
	console.log('asd')
	let infoName = this.nameTareaProject.value;
	if (infoName=='') {return alert('nombre invalido')}
	let infoTask = this.descTareaProject.value;
	let infoDate = this.dateTareaProject.value ? this.dateTareaProject.value  : undefined;
	
	let projectNames = projectName.innerHTML;
	// console.log('pn',projectNames)
	let numId = crearId();
	// console.log(numId);
	let elem = new clases.TareaProject(numId,infoName,infoTask,infoDate,projectNames);
		
	elem.guardar();			
	let info = elem.leer();
	  mostrarDatos(info);
	// console.log(projectNames)
	
}


exports.getFormulario = getFormulario;
exports.mostrarDatos = mostrarDatos;
exports.createProjec = createProject;
exports.tareaProject = tareaProject;
