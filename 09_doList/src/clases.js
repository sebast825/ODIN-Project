const edit = require('./edit.js');
const create = require('./create');
const divSelect = require('./divSelect');
const projectNameEdit = document.querySelector('.projectNameEdit');
const container = document.querySelector('.container');
const containerProjectss = document.querySelector('.containerProjectss');
const containerProjectssSelect = document.querySelector('.containerProjectssSelect');
// const tareaProjectDom = document.querySelector('.tareaProjectDom');
const projectName = document.querySelector('.projectName');
const tareaProjectDom = document.querySelector('.tareaProject');
let almacenar = [];

let almacenarProject=[];

let Project = class Project{
	constructor(nameProject,id){
		this.numId = id
		this.nameProject = nameProject
	
	}
	set setNumId(id){
		this.numId = id;
	}
	set setNameProject(np){
		this.nameProject = np;
	}
	get getLeer(){
		return {numId : this.numId, nameProject : this.nameProject}
	}
	guardar(){
		
		almacenarProject.push({nameProject:this.nameProject})
		
	}
	get  setCreateSelect(){
		let div = document.createElement('DIV');
		let h2 = document.createElement('h2');
		
		div.classList.add('divProjectSelect')
		div.classList.add(this.nameProject);
		h2.innerText=  this.nameProject;
		div.appendChild(h2);
		div.addEventListener('click',()=>{		
			divSelect.mostrarProjectss()
			// let elem = this.mostrarProject
			containerProjectss.appendChild(this.mostrarProject);
			create.showTareaProject(this.nameProject)
			})
		return (div)
	}
	get  mostrarProject(){
	
		let cont = document.createElement('DIV');
		let h2 = document.createElement('H2');
		let btnAgregar = document.createElement('P');
		let btnEliminar = document.createElement('button');
		cont.classList.add('divProject');
		// console.log('jajaj')
		btnAgregar.innerHTML='<i class="fas fa-plus"></i>';
		btnEliminar.innerHTML = 'eliminarProject';
		// btnAgregar.setAttribute('type','submit')
		cont.setAttribute('name',this.nameProject);
		cont.classList.add(this.nameProject);
		h2.innerText = this.nameProject;
		
		cont.appendChild(h2);
		cont.appendChild(btnAgregar);
		cont.appendChild(btnEliminar);
		
		
		btnAgregar.addEventListener('click',()=>{
			tareaProjectDom.style.visibility='visible';
			// console.log('visible');			
			projectName.innerText= this.nameProject;
		})
		btnEliminar.addEventListener('click',()=>{
			console.log('btneliminar',project)
				eliminarProjecto(project)
		})
		return (cont)
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
	set setId(id){
		return this.numId = id
	}
	set setTitle(title){
		return this.title = title
	}
	set setDesc(desc){
		return this.desc = desc
	}
	set setDueDate(dueDate){
		return this.dueDate = dueDate
	}
	set setComplete(complete){
		return this.complete = complete
	}
	guardarInfo(){
		
		 almacenar.push(this.getLeer);
		
	}	
	get getLeer(){
		return  {numId:this.numId,  title:this.title,desc:this.desc, dueDate:this.dueDate, complete:this.complete} 
		
	}
	get mostrarDatos(){
		// console.log(elem[0],elem[1])
	let cont = document.createElement('DIV')
	let miniCont = document.createElement('DIV');
	let descDateDiv = document.createElement('DIV');
	let btnDiv = document.createElement('DIV');
	let nameTask = document.createElement('H2');
	let descTask = document.createElement('P');
	let dateTask = document.createElement('P');
	let btnDelete = document.createElement('P');
	let btnEdit = document.createElement('P');
	
	cont.classList.add('divTarea');
	descDateDiv.classList.add('descDate');
	btnDiv.classList.add('btnDiv');
	miniCont.classList.add('miniCont');
	descTask.classList.add('descTask');
	dateTask.classList.add('dateTask');

	btnDelete.innerHTML='<i class="fas fa-trash-alt"></i>';
	btnEdit.innerHTML = '<i class="fas fa-edit"></i>';
	nameTask.innerText=this.title;
	descTask.innerText = this.desc;
	dateTask.innerText = this.dueDate;

	btnDiv.appendChild(btnDelete);
	btnDiv.appendChild(btnEdit);
	
	descDateDiv.appendChild(descTask);
	descDateDiv.appendChild(dateTask);
	cont.appendChild(nameTask);
	miniCont.appendChild(descDateDiv);
	miniCont.appendChild(btnDiv);
	cont.appendChild(miniCont)
	btnEdit.addEventListener('click',()=>{
		formularioEdit.style.visibility='visible';
		this.editHijo()

	})
	btnDelete.addEventListener('click',()=>{
		
		this.eliminarElemento(cont)
		this.removerHijo(this.numId);
	})	
	
	return(cont)
	}
	eliminarElemento(cont){
	
		container.removeChild(cont)
		console.log(this.numId)
	
	}

	removerHijo(numId){

		almacenar.forEach((elem,index,object)=>{
			//index es el n* de elemento, object hace refernciaal array recorrido
			if(numId==elem.numId){				
				object.splice(index,1);				
			}
		})
	}
	editHijo(){
	
		//si la tarea tiene un Projecto aparece el nombre del projecto
		projectNameEdit.innerText= this.numId
		let form = document.formularioEdit
		// guardarId= elem.numId
		form.nameTaskEdit.value = this.title
		form.descTaskEdit.value = this.desc
		form.dateTaskEdit.value = this.dueDate
	}
	get paraMasaDELANTE(){
		let a = this.mostrarDatos;
		let elem = document.createElement('h2');
		elem.innerHTML='ahsdhasdh'
		a.appendChild(elem)
		return a
	}
}	


let TareaProject = class TareaProject extends Tarea{
	constructor(numId,title, desc, dueDate, project,complete){
		super(numId,title, desc, dueDate,complete);		
		this.project = project
	}
	set setNameProject(project){
		this.project = project	
	}
	guardar(){		
		
		almacenar.push(this.getLeer);
		// almacenar.push(b)
		// console.log(almacenar)	
	}
	get getLeer(){
		 let c = super.getLeer
		 c.project = this.project		
		return c
	}
	
}


exports.almacenar = almacenar;
exports.Tarea = Tarea;
exports.almacenarProject = almacenarProject;
exports.TareaProject =TareaProject;
exports.Project = Project;