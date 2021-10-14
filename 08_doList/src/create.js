
const clases = require('./clases.js');
const edit = require('./edit.js');

const divSelect = require('./divSelect.js');

// const index = require('./index.js')

let container = document.querySelector('.container');
let projectName = document.querySelector('.projectName');
let containerToday = document.querySelector('.containerToday');
let containerProjectss = document.querySelector('.containerProjectss');
let formularioEdit = document.querySelector('.formularioEdit');
let tareaProjectDom = document.querySelector('.tareaProject');

let containerProjectssSelect = document.querySelector('.containerProjectssSelect');
// const asd = index.
function getFormulario(e){
	e.preventDefault();
	//si es taabajo no la corre y hay quilombo 
	divSelect.mostrarTareas()
	let infoName = this.nameTask.value;
	if (infoName=='') {return alert('nombre invalido')}
	let infoTask = this.descTask.value;
	let infoDate = this.dateTask.value ? this.dateTask.value  : undefined;
	let numId = crearId();
	console.log(numId);
	let elem = new clases.Tarea(numId,infoName,infoTask,infoDate);
		
	elem.asd();			
	let info = elem.leer();
	
	divSelect.colocarTareaEn(info);
	
	
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
	// console.log(elem[0],elem[1])
	let cont = document.createElement('DIV')
	let miniCont = document.createElement('DIV');
	let descDateDiv = document.createElement('DIV');
	let btnDiv = document.createElement('DIV');
	let nameTask = document.createElement('H2');
	let descTask = document.createElement('P');
	let dateTask = document.createElement('P');
	let btnDelete = document.createElement('P');
	let btnEdit = document.createElement('P');
	
	cont.classList.add('divTarea');
	descDateDiv.classList.add('descDate');
	btnDiv.classList.add('btnDiv');
	miniCont.classList.add('miniCont');
	descTask.classList.add('descTask');
	dateTask.classList.add('dateTask');

	btnDelete.innerHTML='<i class="fas fa-trash-alt"></i>';
	btnEdit.innerHTML = '<i class="fas fa-edit"></i>';
	nameTask.innerText=elem.title;
	descTask.innerText = elem.desc;
	dateTask.innerText = ponerFecha(elem.dueDate);

	btnDiv.appendChild(btnDelete);
	btnDiv.appendChild(btnEdit);
	
	descDateDiv.appendChild(descTask);
	descDateDiv.appendChild(dateTask);
	cont.appendChild(nameTask);
	miniCont.appendChild(descDateDiv);
	miniCont.appendChild(btnDiv);
	cont.appendChild(miniCont)
	btnEdit.addEventListener('click',()=>{
		formularioEdit.style.visibility='visible';
		edit.editHijo(elem)

	})
	btnDelete.addEventListener('click',()=>{
		
		eliminarElementoDom(cont)
		removerHijo(elem);
	})	
	return(cont)
}
function ponerFecha(fecha){
	if(fecha!=undefined){
		return fecha
	}else{
		return ''
	}
}
function eliminarElementoDom(cont){
	let func = divSelect.colocarTareaEnActualizado()
	if(func==true){
		container.removeChild(cont)
	}else if(func == false){
		containerToday.removeChild(cont)
	}else if (func == undefined){
		containerProjectss.removeChild(cont)
	}else{
		console.log('colocarTareaEnActualizado Error')
	}
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
	e.preventDefault()
		
	let nameProject = this.nameProject.value
	let nameValido = verificarNombreProject(nameProject)
	if(!nameValido)return
	
	let project = new clases.Project(nameProject)	
	project.guardar()	
	
	mostrarProject(project)
	createSelect(project)
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
function mostrarProject(project){
	
	let cont = document.createElement('DIV')	
	let h2 = document.createElement('H2');
	let btnAgregar = document.createElement('P')
	cont.classList.add('divProject')
	// console.log('jajaj')
	btnAgregar.innerHTML='<i class="fas fa-plus"></i>'
	// btnAgregar.setAttribute('type','submit')
	cont.setAttribute('name',project.nameProject)
	cont.classList.add(project.nameProject)
	h2.innerText = project.nameProject;
	
	cont.appendChild(h2)
	cont.appendChild(btnAgregar)
	containerProjectss.appendChild(cont);
	
	btnAgregar.addEventListener('click',()=>{
		console.log('visible')
		tareaProjectDom.style.visibility='visible';
		projectName.innerText= project.nameProject
	})
}

//inserta el nuvo projecto en la lista de projectos
function createSelect(project){
	let div = document.createElement('DIV');
	let h2 = document.createElement('h2');
	div.classList.add('divProjectSelect')
	div.classList.add(project.nameProject);
	h2.innerText=  project.nameProject;
	div.appendChild(h2);
	containerProjectssSelect.appendChild(div);
	showTareaProject(project)
	div.addEventListener('click',()=>{		
		divSelect.mostrarProjectss();
		showTareaProject(project)
		})
				
}

//muestra en el dom el projecto y sus tareas
function showTareaProject(project){
	console.log('showp 1')

	containerProjectss.innerHTML=`<h2>Project </h2>`;
	mostrarProject(project)
   clases.almacenar.forEach(elem=>{
	   if(elem.project==project.nameProject){
		   let tarea = mostrarDatos(elem);
		   containerProjectss.appendChild(tarea)
	   }
})
}
function tareaProject(e){
	e.preventDefault();
	
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
	
	//es para mostrar la tarea
	bsucarPorjecto(projectName.innerHTML)
	
}

//busca el projeto
function bsucarPorjecto(name){
	clases.almacenarProject.forEach(elem=>{
		if(elem.nameProject==name){
			showTareaProject(elem)
		}
	})
}



exports.getFormulario = getFormulario;
exports.mostrarDatos = mostrarDatos;
exports.createProjec = createProject;
exports.tareaProject = tareaProject;
exports.bsucarPorjecto = bsucarPorjecto;

