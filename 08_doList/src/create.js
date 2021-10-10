const { parse } = require('date-fns');
const { addSeconds } = require('date-fns/fp');
const clases = require('./clases.js')
let container = document.querySelector('.container');
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
		 elem.asd()
		//   console.log(clases.alm)	
	
	 let info = elem.leer()
	 mostrarDatos(info)
}



function crearId(){	
	let numId;
		if(clases.almacenar.length==0){
			numId= 0;
		}else{
			let lastId = clases.almacenar[clases.almacenar.length-1];
			// numId = parseInt(lastId.split(',')[0])+1
			numId = parseInt(lastId.numId) +1			
		}
		return numId
		// let a = almacenar[almacenar.length - 1]
		// console.log('esto es a',a.split(',')[0])
}

function mostrarDatos(elem){
	
		console.log(elem[0],elem[1])
		let cont = document.createElement('DIV')
		let nameTask = document.createElement('H2');
		let descTask = document.createElement('P')
		let btnDelete = document.createElement('button')
		// btnDelete.setAttribute('')
		nameTask.innerText=elem.title
		descTask.innerText = elem.desc
		cont.appendChild(btnDelete)
		cont.appendChild(nameTask)
		cont.appendChild(descTask)
		container.appendChild(cont)

		
		
		btnDelete.addEventListener('click',()=>{
			 container.removeChild(cont)
			
			removerHijo(elem)
		})	
}
function removerHijo(asd){
	clases.almacenar.forEach((elem,index,object)=>{
		//index es el n* de elemento, object hace refernciaal array recorrido
		if(asd.numId==elem.numId){
			object.splice(index,1)
			console.log(clases.almacenar)			
		}
	})
}

exports.crearId = crearId
exports.getFormulario = getFormulario
// exports.mostrarDatos = mostrarDatos