


let almacenar=[];
let almacenarProject=[];

let Project = class Project{
	constructor(nameProject,){
		this.nameProject = nameProject
	
	}
	guardar(){
		let c = {nameProject:this.nameProject}
		almacenarProject.push(c)
		console.log(almacenarProject)	
	}
}
let Tarea = class Tarea{
		constructor(numId,title, desc, dueDate,complete=false){
			
		this.numId = numId,
		this.title = title,
		this.desc = desc,
		this.dueDate = dueDate,
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
		
	
	}		

let TareaProject = class TareaProject extends Tarea{
	constructor(numId,title, desc, dueDate, project,complete){
		super(numId,title, desc, dueDate,complete);		
		this.project = project
	}
	guardar(){
		let c = super.leer()
		c.project=this.project
		
		almacenar.push(c);
		// almacenar.push(b)
		console.log(almacenar)	
	}
	leer(){
		let c = super.leer()
		c.project=this.project		
		return c
	}
	
}

module.exports = {Tarea,almacenar,   Project,almacenarProject,TareaProject}