const clases = require('./clases.js');
const container = document.querySelector('.container');
function getFormulario(e){
	e.preventDefault();
	//si es taabajo no la corre y hay quilombo 
	// divSelect.mostrarTareas()
	let infoName = this.nameTask.value;
	if (infoName=='') {return alert('nombre invalido')}
	let infoTask = this.descTask.value;
	let infoDate = this.dateTask.value ;
	let numId = crearId();
	// console.log(numId);
	let elem = new clases.Tarea();
	elem.setTitle = infoName;
	elem.setDesc = infoTask;
	elem.setId = numId;
	elem.setDueDate = infoDate
	elem.guardarInfo();
	// elem.guardarInfo();			
	 let info = elem.getLeer;
	// console.log(info)
	container.appendChild(elem.mostrarDatos)
	// divSelect.colocarTareaEn(info);
	
	
}

function crearId(){	
	let numId;
		if(clases.almacenar.length==0){
			numId= 0;
		}else{
			let lastId = clases.almacenar[clases.almacenar.length-1];			
			numId = parseInt(lastId.numId) +1	;		
		}
		return numId;
}

exports.getFormulario = getFormulario