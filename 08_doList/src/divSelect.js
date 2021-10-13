const clases = require('./clases.js');
const create = require('./create.js');
const containerProjectss = document.querySelector('.containerProjectss');
const container = document.querySelector('.container');
const containerToday = document.querySelector('.containerToday');


function mostrar(){
	container.style.visibility='hidden';
	containerToday.style.visibility='hidden';
	containerProjectss.style.visibility = 'hidden';
}
function mostrarTareas(e){
	e.preventDefault()
	mostrarTareas()
	mostrar();
	container.style.visibility='visible';
}
function mostrarToday(e){
	// e.preventDefault()
	mostrar();
	
	containerToday.style.visibility = 'visible';

}
function mostrarProjectss(){
	
	mostrar();
	containerProjectss.style.visibility = 'visible';

}

function mostrarTareas(){
	clases.almacenar.forEach(elem=>{
		let tarea = create.mostrarDatos(elem);
		container.appendChild(tarea)
	})
}
exports.mostrar = mostrar;
exports.mostrarTareas = mostrarTareas;
exports.mostrarToday = mostrarToday;
exports.mostrarProjectss = mostrarProjectss;
