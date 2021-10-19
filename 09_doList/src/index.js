const menu = require('./menu.js');
const create = require('./create.js');
const clases = require('./clases.js');
const divSelect = require('./divSelect')
const edit = require('./edit')
const formsBarra = document.querySelector('.barra');
const formularioEditBtn = document.querySelector('.formularioEdit-btn');

const tareasSelect = document.querySelector('.tareasSelect');
const todaySelect = document.querySelector('.todaySelect');
const containerProjectssSelect = document.querySelector('.containerProjectssSelect')
			

document.formulario.addEventListener('submit',create.getFormulario);
document.formularioEdit.addEventListener('submit',edit.actualziarDatos);

document.createProject.addEventListener('submit',create.createProject);
document.tareaProject.addEventListener('submit',create.tareaProject);
formsBarra.addEventListener('click',menu.showMenu)


tareasSelect.addEventListener('click',divSelect.mostrarTareas)
todaySelect.addEventListener('click',divSelect.mostrarToday)
