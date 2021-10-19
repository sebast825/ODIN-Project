const container = document.querySelector('.container');
const clases = require('./clases.js');
const create = require('./create');
const divSelect = require('./divSelect');
const projectNameEdit = document.querySelector('.projectNameEdit');


function editHijo(elem){
	
	//si la tarea tiene un Projecto aparece el nombre del projecto
	projectNameEdit.innerText= elem.numId
	let form = document.formularioEdit
	// guardarId= elem.numId
	form.nameTaskEdit.value = elem.title
	form.descTaskEdit.value = elem.desc
	form.dateTaskEdit.value = elem.dueDate
}

//recibe los datos del formulario de edicion, 
//edita el elemento guardado
function actualziarDatos(e){
	let form = document.formularioEdit;
	e.preventDefault();
	 console.log(clases.almacenar);
	clases.almacenar.forEach(elem=>{
		if(elem.numId==projectNameEdit.innerHTML){
			elem.title = form.nameTaskEdit.value;
			elem.desc = form.descTaskEdit.value;
			elem.dueDate = form.dateTaskEdit.value;
			// console.log(elem.getLeer)
	}}

	
)

document.formularioEdit.style.visibility = 'hidden'
//serparaqr en otra funcion, es para mostrar todos los datos
clases.almacenar.forEach(elem=>{
	let obj = new clases.Tarea();
	obj.setTitle =elem.title ;
	obj.setDesc = elem.desc;
	obj.setId = elem.numId;
	obj.setDueDate = elem.dueDate;
	container.appendChild(create.mostrarDatos(obj))
})
divSelect.mostrarTareas()
}
exports.actualziarDatos = actualziarDatos;

exports.editHijo=editHijo;