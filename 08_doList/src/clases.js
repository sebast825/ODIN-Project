


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
			// console.log('desde asd')
			let b = (`${this.numId}, ${this.title},${this.desc},${this.dueDate},${this.complete}`)
			almacenar.push(b)
			console.log(almacenar)			
		}	
	
	}		

module.exports = {Tarea,almacenar}