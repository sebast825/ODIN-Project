(()=>{var e={626:(e,t,r)=>{r(639),r(724),r(431),document.querySelector(".projectNameEdit"),document.querySelector(".container"),document.querySelector(".containerProjectss"),document.querySelector(".containerProjectssSelect"),document.querySelector(".projectName"),document.querySelector(".tareaProject");let a=[],o=[],n=class{constructor(e,t,r,a,o=!1){this.numId=e,this.title=t,this.desc=r,this.dueDate=a,this.complete=o}set setId(e){return this.numId=e}set setTitle(e){return this.title=e}set setDesc(e){return this.desc=e}set setDueDate(e){return this.dueDate=e}set setComplete(e){return this.complete=e}guardarInfo(){a.push(this.getLeer)}get getLeer(){return{numId:this.numId,title:this.title,desc:this.desc,dueDate:this.dueDate,complete:this.complete}}get paraMasaDELANTE(){let e=this.mostrarDatos,t=document.createElement("h2");return t.innerHTML="ahsdhasdh",e.appendChild(t),e}};t.almacenar=a,t.Tarea=n,t.almacenarProject=o,t.TareaProject=class extends n{constructor(e,t,r,a,o,n){super(e,t,r,a,n),this.project=o}set setNameProject(e){this.project=e}guardar(){a.push(this.getLeer)}get getLeer(){let e=super.getLeer;return e.project=this.project,e}},t.Project=class{constructor(e,t){this.numId=t,this.nameProject=e}set setNumId(e){this.numId=e}set setNameProject(e){this.nameProject=e}get getLeer(){return{numId:this.numId,nameProject:this.nameProject}}guardar(){o.push(this.getLeer)}}},724:(e,t,r)=>{const a=r(626),o=r(431),n=r(425),c=r(639),s=document.querySelector(".container"),l=document.querySelector(".containerProjectssSelect"),i=document.querySelector(".containerProjectss"),d=document.querySelector(".projectName"),u=document.querySelector(".tareaProject");function m(e){let t;if(0==e.length)t=0;else{let r=e[e.length-1];t=parseInt(r.numId)+1}return t}function h(e){a.almacenar.forEach((t=>{if(console.log(t),t.project==e.nameProject){let e=p(t);i.appendChild(e)}}))}function p(e){let t=document.createElement("DIV"),r=document.createElement("DIV"),a=document.createElement("DIV"),o=document.createElement("DIV"),s=document.createElement("H2"),l=document.createElement("P"),i=document.createElement("P"),d=document.createElement("P"),u=document.createElement("P");return t.classList.add("divTarea"),a.classList.add("descDate"),o.classList.add("btnDiv"),r.classList.add("miniCont"),l.classList.add("descTask"),i.classList.add("dateTask"),d.innerHTML='<i class="fas fa-trash-alt"></i>',u.innerHTML='<i class="fas fa-edit"></i>',s.innerText=e.title,l.innerText=e.desc,i.innerText=e.dueDate,o.appendChild(d),o.appendChild(u),a.appendChild(l),a.appendChild(i),t.appendChild(s),r.appendChild(a),r.appendChild(o),t.appendChild(r),u.addEventListener("click",(()=>{formularioEdit.style.visibility="visible",c.editHijo(e)})),d.addEventListener("click",(()=>{n.eliminarElemento(t),n.removerHijo(e.numId)})),t}t.getFormulario=function(e){e.preventDefault();let t=this.nameTask.value;if(""==t)return alert("nombre invalido");let r=this.descTask.value,o=this.dateTask.value,n=m(a.almacenar),c=new a.Tarea;c.setTitle=t,c.setDesc=r,c.setId=n,c.setDueDate=o,c.guardarInfo(),c.getLeer,s.appendChild(p(c))},t.createProject=function(e){e.preventDefault();let t=this.nameProject.value,r=function(e){let t=!0;return a.almacenarProject.forEach((r=>{r.nameProject==e&&(alert("ya esxiste un proyecto con ese nombre"),t=!1)})),t}(t);if(!r)return;let c=new a.Project;c.setNumId=m(a.almacenarProject),c.setNameProject=t,c.guardar(),console.log(c.getLeer),l.appendChild(function(e){let t=document.createElement("DIV"),r=document.createElement("h2");return t.classList.add("divProjectSelect"),t.classList.add(e.nameProject),r.innerText=e.nameProject,t.appendChild(r),t.addEventListener("click",(()=>{o.mostrarProjectss(),function(e){let t=document.createElement("DIV"),r=document.createElement("H2"),a=document.createElement("P"),o=document.createElement("button");t.classList.add("divProject"),a.innerHTML='<i class="fas fa-plus"></i>',o.innerHTML="eliminarProject",t.setAttribute("name",e),t.classList.add(e),r.innerText=e,t.appendChild(r),t.appendChild(a),t.appendChild(o),a.addEventListener("click",(()=>{console.log("visible"),u.style.visibility="visible",d.innerText=e})),o.addEventListener("click",(()=>{n.eliminarProjecto(e)})),i.appendChild(t)}(e.nameProject),h(e),console.log(e)})),t}(c.getLeer))},t.showTareaProject=h,t.tareaProject=function(e){e.preventDefault(),u.style.visibility="hidden";let t=this.nameTareaProject.value;if(""==t)return alert("nombre invalido");let r=this.descTareaProject.value,o=this.dateTareaProject.value,n=m(a.almacenar),c=new a.TareaProject;c.setTitle=t,c.setDesc=r,c.setDueDate=o,c.setNameProject=d.innerHTML,c.setId=n,c.guardar(),console.log(c.getLeer),i.appendChild(p(c))},t.mostrarDatos=p},425:(e,t,r)=>{const a=r(431),o=r(626),n=document.querySelector(".containerProjectssSelect"),c=document.querySelector(".containerProjectss"),s=document.querySelector(".containerToday"),l=document.querySelector(".container");t.eliminarProjecto=function(e){confirm("Seguro que desea eliminar el proyecto?")&&(o.almacenar.forEach(((t,r,a)=>{console.log("eliminar tarea"),t.project==e&&(console.log(t),a.splice(r,1))})),function(e){o.almacenarProject.forEach(((t,r,a)=>{console.log("afuasdasdasdera",t),t.nameProject==e&&(a.splice(r,1),console.log("deasd",o.almacenarProject))}))}(e),n.innerText="",o.almacenarProject.forEach((e=>{console.log(e),n.appendChild(createSelect(e))})),a.mostrarTareas())},t.eliminarElemento=function(e){let t=a.colocarTareaEnActualizado();1==t?l.removeChild(e):0==t?s.removeChild(e):null==t?c.removeChild(e):console.log("colocarTareaEnActualizado Error")},t.removerHijo=function(e){o.almacenar.forEach(((t,r,a)=>{e==t.numId&&a.splice(r,1)}))}},431:(e,t,r)=>{const a=r(626),o=r(724),n=r(201),c=document.querySelector(".containerProjectss"),s=document.querySelector(".container"),l=document.querySelector(".containerToday"),i=document.querySelector(".tareasSelect"),d=document.querySelector(".todaySelect"),u=document.querySelector(".allProjects");function m(){s.style.visibility="hidden",l.style.visibility="hidden",c.style.visibility="hidden"}function h(e){i.classList.remove("class"),d.classList.remove("class"),u.classList.remove("class"),"tareas"==e?i.classList.add("class"):"today"==e?d.classList.add("class"):"project"==e?u.classList.add("class"):console.log("errro colorSelect")}e.exports={mostrarTareas:function(){m(),s.innerText="",a.almacenar.forEach((e=>{let t=o.mostrarDatos(e);s.appendChild(t)})),h("tareas"),s.style.visibility="visible"},mostrarToday:function(){m(),l.innerText="",console.log("asd"),a.almacenar.forEach((e=>{let t=function(e){if(console.log("asd"),console.log(e),console.log("comienzo"),null!=e.dueDate&&(console.log(e),n.htmlToday(e.dueDate)))return console.log("entro"),!0}(e);if(t){let t=o.mostrarDatos(e);l.prepend(t)}})),h("today"),l.style.visibility="visible"},mostrarProjectss:function(e){h("project"),c.innerText="",m(),c.style.visibility="visible"},colocarTareaEnActualizado:function(){return"visible"==s.style.visibility||"visible"!=l.style.visibility&&void("visible"!=c.style.visibility&&console.log("colocarTareaEnActualizado Error"))}}},639:(e,t,r)=>{const a=document.querySelector(".container"),o=r(626),n=r(724),c=r(431),s=document.querySelector(".projectNameEdit");t.actualziarDatos=function(e){let t=document.formularioEdit;e.preventDefault(),console.log(o.almacenar),o.almacenar.forEach((e=>{e.numId==s.innerHTML&&(e.title=t.nameTaskEdit.value,e.desc=t.descTaskEdit.value,e.dueDate=t.dateTaskEdit.value)})),document.formularioEdit.style.visibility="hidden",o.almacenar.forEach((e=>{let t=new o.Tarea;t.setTitle=e.title,t.setDesc=e.desc,t.setId=e.numId,t.setDueDate=e.dueDate,a.appendChild(n.mostrarDatos(t))})),c.mostrarTareas()},t.editHijo=function(e){s.innerText=e.numId;let t=document.formularioEdit;t.nameTaskEdit.value=e.title,t.descTaskEdit.value=e.desc,t.dateTaskEdit.value=e.dueDate}},201:(e,t)=>{let r="",a=[];document.querySelector(".dateTask"),t.htmlToday=function(e){return r=e,function(){const e=new Date;let t=e.getUTCDate(),r=e.getMonth()+1,o=e.getUTCFullYear();a.push(t),a.push(r),a.push(o)}(),function(){console.log(r,"nueva fecha");let e=r.split("-");console.log(e,"nueva fecha");let t=parseFloat(e[2]),o=parseFloat(e[1]),n=parseFloat(e[0]),c=parseFloat(a[0])-t,s=parseFloat(a[1])-o,l=parseFloat(a[2])-n;if(console.log("nueva fecha",r),l<1&&l>-1&&s<1&&s>-1&&c<=1&&c>=-1)return console.log("esta en el if"),console.log("restarDay",c,"restarMonth",s,l),!0;console.log("nueva fecha",r),console.log("fecha actual",a),console.log(t,o,n),console.log(a[2],a[1],a[0])}()}},83:(e,t)=>{const r=document.querySelector(".formsPrincpales"),a=document.querySelector(".container"),o=document.querySelector(".containerProjectss"),n=document.querySelector(".containerToday");t.showMenu=function(){r.classList.toggle("formsPrincpales-oculto"),a.classList.toggle("colorActive"),o.classList.toggle("colorActive"),n.classList.toggle("colorActive")}}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}(()=>{const e=r(83),t=r(724),a=(r(626),r(431)),o=r(639),n=document.querySelector(".barra"),c=(document.querySelector(".formularioEdit-btn"),document.querySelector(".tareasSelect")),s=document.querySelector(".todaySelect");document.querySelector(".containerProjectssSelect"),document.formulario.addEventListener("submit",t.getFormulario),document.formularioEdit.addEventListener("submit",o.actualziarDatos),document.createProject.addEventListener("submit",t.createProject),document.tareaProject.addEventListener("submit",t.tareaProject),n.addEventListener("click",e.showMenu),c.addEventListener("click",a.mostrarTareas),s.addEventListener("click",a.mostrarToday),a.mostrarTareas()})()})();