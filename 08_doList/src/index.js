//  import {  format } from "date-fns"
// import {Tarea,almacenar} from './clases.js'
const create = require('./create.js')
const edit = require('./edit.js')
// const fecha = format(new Date(),'yyyy/MM/dd')
// const app =()=>{
// 	const date = new Date()
// 	let asd = addDays(date,1)
// 	console.log(asd)
// }
// app()

// 'strict mode';



document.formulario.addEventListener('submit',create.getFormulario)
document.formularioEdit.addEventListener('submit',edit.editarTarea)

document.createProject.addEventListener('submit',create.createProjec)
document.tareaProject.addEventListener('submit',create.tareaProject)


