import {  addDays } from "date-fns"
// import {Tarea,almacenar} from './clases.js'
const create = require('./create.js')

const app =()=>{
	const date = new Date()
	let asd = addDays(date,1)
	console.log(asd)
}
app()

// 'strict mode';

let container = document.querySelector('.container');

document.formulario.addEventListener('submit',create.getFormulario)



function mostrarDatos(){
	almacenar.forEach(elem=>{
		console.log(elem[0],elem[1])
		let cont = document.createElement('DIV')
		let nameTask = document.createElement('H2');
		let descTask = document.createElement('P')
		nameTask.innerText=elem[0]
		descTask.innerText = elem[1]
		cont.appendChild(nameTask)
		cont.appendChild(descTask)
		container.appendChild(cont)

	})
}