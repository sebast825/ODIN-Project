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
		this.__uniqueid = '',
		this._title = title,
		this._desc = desc,
		this._dueDate = dueDate,
		this._complete = complete
		
		
	}	
	set title (title){
		return this._title = title
	}
	set desc(desc){
		return this._desc = desc
	}		
	set duaDate (dueDate){
		return this._dueDate = dueDate
	}
	set complete(a){
		return this._complete = !this.complete
	}
	get actualizarNumTarea (){
		console.log('almacenar',almacenar[0].split(' '))
		let numId = 0;
		if (almacenar.length!=0){
			let idAnterior =almacenar[-1][0];
			numId = idAnterior+1;
		}		
		return this.__uniqueid = numId;
		
	}
	
	get props(){
		let elem =[`${this.__uniqueid} ${this._title}${this._desc} ${this._dueDate}${this.num}`]
	
		almacenar.push(elem)
	}
		
}

// let nota = new Tarea('a','b','c','d')
// nota.notes('asd')
// console.log(nota)

function mostrarDatos(){
	almacenar.forEach(elem=>{
		console.log(elem)
		//  elem.slice(' ')
		console.log('dividido',elem[0])
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
		elem.title=(infoName)
	}if (infoTask!=undefined){
		elem.desc=(infoTask)
	}if (infoDate!=undefined){
		elem.duaDate=(infoDate)
	}
	let obj = [infoName,infoTask,infoDate]
	// console.log(elem)
	elem.actualizarNumTarea;
	// almacenar.push(obj)
	 elem.props	
	mostrarDatos()
	console.log(almacenar)
}
document.formulario.addEventListener('submit',getFormulario)