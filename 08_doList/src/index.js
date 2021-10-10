import {  addDays } from "date-fns"
import {Tarea,almacenar} from './clases.js'
const app =()=>{
	const date = new Date()
	let asd = addDays(date,1)
	console.log(asd)
}
app()

// 'strict mode';

let container = document.querySelector('.container');


function getFormulario(e){
	e.preventDefault()
	//  r.split(',')	 
	//   console.log('alamacenar',almacenar)
	//   let convertir = JSON.stringify(a)
	//   let pedacito = convertir.split(':')
	//   console.log(pedacito[0])
	 let infoName = this.nameTask.value;
	 let infoTask = this.descTask.value;
	 let infoDate = this.dateTask.value ? this.dateTask.value  : undefined;
	let numId = crearId();
	console.log(numId)
	let elem;
	if (infoName!=undefined){
		elem = new Tarea(numId,infoName,infoTask,infoDate)
		}
		// elem.numId()
		elem.asd()	
	// console.log(elem)
	// almacenar.push(elem)	 
	// mostrarDatos()
}
document.formulario.addEventListener('submit',getFormulario)


function crearId(){	
	let numId;
		if(almacenar.length==0){
			numId= 0;
		}else{
			let lastId = almacenar[almacenar.length-1];
			numId = parseInt(lastId.split(',')[0])+1			
		}
		return numId
		// let a = almacenar[almacenar.length - 1]
		// console.log('esto es a',a.split(',')[0])
}




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