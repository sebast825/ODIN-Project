


let almacenar=[];

let Tarea = class Tarea{
		constructor(numId,title, desc, dueDate,complete=false){
			
		this.numId = numId,
		this.title = title,
		this.desc = desc,
		this.dueDate = dueDate
		this.complete = complete	
		}
		asd(){
			let c = {numId:this.numId, title:this.title, desc:this.desc, dueDate:this.dueDate, complete:this.complete} 
			 almacenar.push(c);
			// almacenar.push(b)
			console.log(almacenar)					
		}	
		leer(){
			let c = {numId:this.numId, title:this.title, desc:this.desc, dueDate:this.dueDate, complete:this.complete} 
			return c
		}
		remover(){
			almacenar.pop(elem)
			console.log(almacenar)
		}
	
	}		

module.exports = {Tarea,almacenar}