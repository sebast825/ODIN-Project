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
	// mostrarTotalTareas();
	activeSelect('tareas')
	container.style.visibility='visible';
}
function mostrarToday(){
	// e.preventDefault()
	mostrar();
	// mostrarTotalToday()
	activeSelect('today')
	containerToday.style.visibility = 'visible';

}
function mostrarProjectss(){
	containerProjectss.innerText='';
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
module.exports={mostrarTareas,mostrarToday,mostrarProjectss}