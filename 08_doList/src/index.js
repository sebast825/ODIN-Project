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



document.formulario.addEventListener('submit',create.getFormulario)



