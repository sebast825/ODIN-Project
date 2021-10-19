const clases = require('./clases.js');
const divSelect = require ('./divSelect')
const container = document.querySelector('.container');
const containerProjectssSelect = document.querySelector('.containerProjectssSelect');
const containerProjectss = document.querySelector('.containerProjectss');
const projectName = document.querySelector('.projectName');
const tareaProjectDom = document.querySelector('.tareaProject');
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
	containerProjectssSelect.appendChild(createSelect(project.getLeer))
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
		   console.log(elem)
		//    let tarea = mostrarDatos(elem);
		//    containerProjectss.appendChild(tarea)
	   }
})
}

function tareaProject(e){
	e.preventDefault();
	
	tareaProjectDom.style.visibility = 'hidden'
	let infoName = this.nameTareaProject.value;
	if (infoName=='') {return alert('nombre invalido')}
	let infoTask = this.descTareaProject.value;
	let infoDate = this.dateTareaProject.value;
	
	
	// console.log('pn',projectNames)
	let numId = crearId(clases.almacenar);
	// console.log(numId);
	let elem = new clases.TareaProject();
		
		elem.setTitle = infoName;		
		elem.setDesc = infoTask;
		elem.setDueDate = infoDate;
		elem.setNameProject = projectName.innerHTML;
		elem.setId=numId;
	elem.guardar();			
	console.log(elem.getLeer)
	containerProjectss.appendChild(elem.mostrarDatos)
	
	//es para mostrar la tarea
	// bsucarPorjecto(projectName.innerHTML)
	
}

function createSelect(elem){
	let div = document.createElement('DIV');
	let h2 = document.createElement('h2');
	
	div.classList.add('divProjectSelect')
	div.classList.add(elem);
	h2.innerText=  elem;
	div.appendChild(h2);
	div.addEventListener('click',()=>{		
		divSelect.mostrarProjectss()
		// let elem = this.mostrarProject
		mostrarProject(elem);
		// showTareaProject(elem.nameProject)
		})
		
	return (div)
}
function mostrarProject(project){
	
	let cont = document.createElement('DIV');
	let h2 = document.createElement('H2');
	let btnAgregar = document.createElement('P');
	let btnEliminar = document.createElement('button');
	cont.classList.add('divProject');
	// console.log('jajaj')
	btnAgregar.innerHTML='<i class="fas fa-plus"></i>';
	btnEliminar.innerHTML = 'eliminarProject';
	// btnAgregar.setAttribute('type','submit')
	cont.setAttribute('name',project.nameProject);
	cont.classList.add(project.nameProject);
	h2.innerText = project.nameProject;
	
	cont.appendChild(h2);
	cont.appendChild(btnAgregar);
	cont.appendChild(btnEliminar);

	containerProjectss.appendChild(cont);
	
	btnAgregar.addEventListener('click',()=>{
		console.log('visible');
		tareaProjectDom.style.visibility='visible';
		projectName.innerText= project.nameProject;
	})
	btnEliminar.addEventListener('click',()=>{
		console.log('btneliminar',project)
			eliminarProjecto(project)
	})
	
}

function eliminarProjecto(project){
	let confirmar = confirm('Seguro que desea eliminar el proyecto?');
	if(confirmar){
		borrarTarea()
		borrarProject()
		actualizarSelect()
}
function borrarTarea(){
	//borra tarea
	clases.almacenar.forEach((elem,index,object)=>{
		console.log('eliminar tarea')	
		if(elem.project==project.nameProject){
			console.log(elem);
			object.splice(index,1);							
		}
	})
}		
function borrarProject(){
	//borra proyecto
	clases.almacenarProject.forEach((elem,index,object)=>{
		console.log('afuera',elem)
	if(elem.nameProject==project.nameProject){
		object.splice(index,1);		
		console.log('desde dentro',clases.almacenarProject)
				
	}
	})
}

function actualizarSelect(){
	//actualiza el select
	containerProjectssSelect.innerText='';
	setTimeout(function(){
		clases.almacenarProject.forEach(elem=>{
			console.log('elem',elem)
			createSelect(elem.nameProject)
		})	
	},50)
	



	divSelect.mostrarProjectss()
	}		
}
	



exports.getFormulario = getFormulario;
exports.createProject = createProject;

exports.showTareaProject = showTareaProject;
exports.tareaProject = tareaProject;
exports.createSelect = createSelect;

