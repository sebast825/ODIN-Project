const clases = require('./clases.js');
const create = require('./create.js');
const fecha = require('./fecha.js')
const containerProjectss = document.querySelector('.containerProjectss');
const container = document.querySelector('.container');
const containerToday = document.querySelector('.containerToday');

const tareasSelect = document.querySelector('.tareasSelect');
const todaySelect = document.querySelector('.todaySelect');
const allProjects = document.querySelector('.allProjects');

function mostrar(){
	container.style.visibility='hidden';
	containerToday.style.visibility='hidden';
	containerProjectss.style.visibility = 'hidden';
}
function mostrarTareas(){
	// e.preventDefault()
	
	mostrar();
	mostrarTotalTareas();
	activeSelect('tareas')
	container.style.visibility='visible';
}
function mostrarToday(){
	// e.preventDefault()
	mostrar();
	mostrarTotalToday()
	activeSelect('today')
	containerToday.style.visibility = 'visible';

}
function mostrarProjectss(){
	
	mostrar();
	activeSelect('project')
	containerProjectss.style.visibility = 'visible';

}

function activeSelect(elem){
	tareasSelect.classList.remove('class');
	todaySelect.classList.remove('class');	
	allProjects.classList.remove('class');
	if(elem=="tareas"){
		tareasSelect.classList.add('class');
	}else if(elem=="today"){
		todaySelect.classList.add('class');
	}else if(elem=="project"){
		allProjects.classList.add('class');
	}else{
		console.log('errro colorSelect')
	}
	

	


	
}
//muestra todas las tareas en container
function mostrarTotalTareas(){
	//si no si clickias muchas veces, repite las tareas
	
	container.innerText = '';
	clases.almacenar.forEach(elem=>{
		console.log('mosstartareastotales')
		let tarea = create.mostrarDatos(elem);
		container.appendChild(tarea)
	})
}

//al clickiar en Today muestra todas las tareas del dia
function mostrarTotalToday(){
	containerToday.innerText='';
	clases.almacenar.forEach(elem=>{
		let verFecha = verificarFecha(elem);
		if(verFecha){
			let obj = create.mostrarDatos(elem)
			containerToday.prepend(obj)
		}


	})
}

//al crear una tarea en el momento, dependiendo donde estes la pone en un lado
//si es una tarea de un projecto no aplica
function colocarTareaEn(info){	
	let elem = create.mostrarDatos(info)
	if(container.style.visibility=='visible'){
		container.prepend(elem)
	}
	 else if (containerToday.style.visibility=='visible'){
		if(verificarFecha(info)){
			containerToday.prepend(elem)
		}
	}else{
		console.log('No estas en tareas ni en today')
	}
}
//depende el valor que retorne administra losd atos
//se usa al borrar
function colocarTareaEnActualizado(){
	if(container.style.visibility=='visible'){
		return true
	}else if(containerToday.style.visibility=='visible'){
		return false
	}else if(containerProjectss.style.visibility=='visible'){		
		return undefined
	}else{
		console.log('colocarTareaEnActualizado Error')
	}
}

//verifica la ficha a ver si entra en containerToday
function verificarFecha(elem){
	console.log('asd')
	console.log(elem)
	console.log('comienzo')
	if(elem.dueDate!=undefined){
		console.log(elem)
		let atr = fecha.htmlToday(elem.dueDate)
		if(atr){
			console.log('entro')
			return true	
		}
}
}

function mostrarTareaActualizada(){
	//oculta el formulario de edicion
	formularioEdit.style.visibility='hidden';
	//sin el intervalo se buguea y aparece todo vacio
	setTimeout(function(){
		if(container.style.visibility=='visible'){
			console.log('container')
			mostrarTareas()
		}else if(containerToday.style.visibility=='visible'){
			console.log('containertoday')
			mostrarToday()
		}else{
			console.log('error evento formularioEditBtn')
		}
	},1)
	
}


exports.mostrar = mostrar;
exports.colocarTareaEn = colocarTareaEn;
exports.mostrarTareas = mostrarTareas;
exports.mostrarToday = mostrarToday;
exports.mostrarProjectss = mostrarProjectss;


exports.mostrarTareaActualizada=mostrarTareaActualizada;
exports.colocarTareaEnActualizado = colocarTareaEnActualizado;

exports.mostrarTareas = mostrarTareas;
exports.mostrarToday = mostrarToday;