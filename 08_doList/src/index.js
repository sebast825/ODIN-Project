//  import {  format } from "date-fns"
// import {Tarea,almacenar} from './clases.js'
const create = require('./create.js')
const edit = require('./edit.js')
const divSelect = require('./divSelect.js')
// const validaciones = require('./validaciones.js')
// const fecha = format(new Date(),'yyyy/MM/dd')
// const app =()=>{
// 	const date = new Date()
// 	let asd = addDays(date,1)
// 	console.log(asd)
// }
// app()

// 'strict mode';

const tareasSelect = document.querySelector('.tareasSelect');
const todaySelect = document.querySelector('.todaySelect')
todaySelect.addEventListener('click',divSelect.mostrarToday)
tareasSelect.addEventListener('click',divSelect.mostrarTareas)



const tareaProjectBtn = document.querySelector('.tareaProject-btn');
const formularioEditBtn = document.querySelector('.formularioEdit-btn')
const container = document.querySelector('.container');
const containerToday = document.querySelector('.containerToday');

tareaProjectBtn.addEventListener('click',()=>{
	tareaProject.style.visibility='hidden';

})




document.formulario.addEventListener('submit',create.getFormulario)
document.formularioEdit.addEventListener('submit',edit.editarTarea)

document.createProject.addEventListener('submit',create.createProjec)
document.tareaProject.addEventListener('submit',create.tareaProject)


formularioEditBtn.addEventListener('click',divSelect.mostrarTareaActualizada)
