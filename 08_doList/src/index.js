import {  addDays } from "date-fns"
import saludar from './clases.js'
const app =()=>{
	const date = new Date()
	let asd = addDays(date,1)
	console.log(asd)
}
app()


console.log(saludar())
let container = document.querySelector('.container');
let almacenar=[];
const Tarea = class Tarea{
	constructor(title, desc, dueDate,complete=false){
		this.title = title,
		this.desc = desc,
		this.dueDate = dueDate,
		this.complete = complete
		this.title = function(a){
			return this.title = a
		}
		this.desc = function(desc){
			return this.desc = desc
		}		
		this.duaDate = function(dueDate){
			return this.dueDate = dueDate
		}
		this.complete = function(){
			return this.complete = !this.complete
		}
	}	
		
}

// let nota = new Tarea('a','b','c','d')
// nota.notes('asd')
// console.log(nota)

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

// let ja = new Tarea('a');
// console.log(ja)

//lee el name del formulario
function getFormulario(e){
	e.preventDefault()
	let infoName = this.nameTask.value;
	let infoTask = this.descTask.value;
	let infoDate = this.dateTask.value;

	let elem;
	if (infoName!=undefined){
		elem = new Tarea()
		elem.title(infoName)
	}if (infoTask!=undefined){
		elem.desc(infoTask)
	}if (infoDate!=undefined){
		elem.duaDate(infoDate)
	}
	
	console.log(elem)
	almacenar.push(elem)
	console.log(almacenar)
	mostrarDatos()
}
document.formulario.addEventListener('submit',getFormulario)