

const clases = require('./clases.js')

// const asd = index.
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
		elem = new clases.Tarea(numId,infoName,infoTask,infoDate)
		}
		// elem.numId()
		elem.asd()	
	// console.log(elem)
	// almacenar.push(elem)	 
	// mostrarDatos()
}



function crearId(){	
	let numId;
		if(clases.almacenar.length==0){
			numId= 0;
		}else{
			let lastId = clases.almacenar[clases.almacenar.length-1];
			numId = parseInt(lastId.split(',')[0])+1			
		}
		return numId
		// let a = almacenar[almacenar.length - 1]
		// console.log('esto es a',a.split(',')[0])
}

exports.crearId = crearId
exports.getFormulario = getFormulario