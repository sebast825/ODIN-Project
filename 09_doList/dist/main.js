(()=>{var e={626:(e,t,r)=>{r(639),r(724),r(431),document.querySelector(".projectNameEdit"),document.querySelector(".container"),document.querySelector(".containerProjectss"),document.querySelector(".containerProjectssSelect"),document.querySelector(".projectName"),document.querySelector(".tareaProject");let a=[],o=[],c=class{constructor(e,t,r,a,o=!1){this.numId=e,this.title=t,this.desc=r,this.dueDate=a,this.complete=o}set setId(e){return this.numId=e}set setTitle(e){return this.title=e}set setDesc(e){return this.desc=e}set setDueDate(e){return this.dueDate=e}set setComplete(e){return this.complete=e}guardarInfo(){a.push(this.getLeer)}get getLeer(){return{numId:this.numId,title:this.title,desc:this.desc,dueDate:this.dueDate,complete:this.complete}}};t.almacenar=a,t.Tarea=c,t.almacenarProject=o,t.TareaProject=class extends c{constructor(e,t,r,a,o,c){super(e,t,r,a,c),this.project=o}set setNameProject(e){this.project=e}guardar(){a.push(this.getLeer)}get getLeer(){let e=super.getLeer;return e.project=this.project,e}},t.Project=class{constructor(e,t){this.numId=t,this.nameProject=e}set setNumId(e){this.numId=e}set setNameProject(e){this.nameProject=e}get getLeer(){return{numId:this.numId,nameProject:this.nameProject}}guardar(){o.push(this.getLeer)}}},724:(e,t,r)=>{const a=r(626),o=r(431),c=r(425),n=r(639),s=r(83),l=r(158),i=document.querySelector(".container"),d=document.querySelector(".containerProjectssSelect"),u=document.querySelector(".containerProjectss"),m=document.querySelector(".projectName"),p=document.querySelector(".tareaProject");function h(e){let t;if(0==e.length)t=0;else{let r=e[e.length-1];t=parseInt(r.numId)+1}return t}function g(e){let t=document.createElement("DIV"),r=document.createElement("h2");return t.classList.add("divProjectSelect"),t.classList.add(e.nameProject),r.innerText=e.nameProject,t.appendChild(r),t.addEventListener("click",(()=>{o.mostrarProjectss(),v(e.nameProject),j(e),s.showMenu(),console.log(e)})),t}function j(e){o.mostrarProjectss(),v(e.nameProject),a.almacenar.forEach((t=>{if(t.project==e.nameProject){let e=f(t);u.appendChild(e)}}))}function f(e){let t=document.createElement("DIV"),r=document.createElement("DIV"),a=document.createElement("DIV"),o=document.createElement("DIV"),s=document.createElement("H2"),i=document.createElement("P"),d=document.createElement("P"),u=document.createElement("P"),m=document.createElement("P"),p=document.createElement("input");return p.setAttribute("type","checkbox"),t.classList.add("divTarea"),a.classList.add("descDate"),o.classList.add("btnDiv"),r.classList.add("miniCont"),i.classList.add("descTask"),d.classList.add("dateTask"),u.innerHTML='<i class="fas fa-trash-alt"></i>',m.innerHTML='<i class="fas fa-edit"></i>',s.innerText=e.title+"    ",i.innerText=e.desc,d.innerText=e.dueDate,o.appendChild(u),o.appendChild(m),s.appendChild(p),a.appendChild(i),a.appendChild(d),t.appendChild(s),r.appendChild(a),r.appendChild(o),t.appendChild(r),e.complete&&(p.checked=!0),p.addEventListener("click",(()=>{e.complete?(console.log("cjeck"),e.complete=!1,t.classList.remove("completeTask")):(e.complete=!0,t.classList.add("completeTask"))})),m.addEventListener("click",(()=>{formularioEdit.style.visibility="visible",n.editHijo(e),l.guardar_LocalStorage()})),u.addEventListener("click",(()=>{c.eliminarElemento(t),c.removerHijo(e.numId),l.guardar_LocalStorage()})),t}function v(e){let t=document.createElement("DIV"),r=document.createElement("H2"),a=document.createElement("P"),o=document.createElement("P");t.classList.add("divProject"),a.innerHTML='<i class="fas fa-plus"></i>',o.innerHTML='<i class="fas fa-trash-alt"></i>',t.setAttribute("name",e),t.classList.add(e),r.innerText=e,t.appendChild(r),t.appendChild(a),t.appendChild(o),a.addEventListener("click",(()=>{console.log("visible"),p.style.visibility="visible",m.innerText=e,l.guardar_LocalStorage()})),o.addEventListener("click",(()=>{c.eliminarProjecto(e),l.guardar_LocalStorage(),l.guardar_LocalStorageProject(),y()})),u.appendChild(t)}function y(){d.innerText="",a.almacenarProject.forEach((e=>{d.appendChild(g(e))}))}t.getFormulario=function(e){e.preventDefault();let t=this.nameTask.value;if(""==t)return alert("nombre invalido");let r=this.descTask.value,o=this.dateTask.value,c=h(a.almacenar),n=new a.Tarea;n.setTitle=t,n.setDesc=r,n.setId=c,n.setDueDate=o,n.guardarInfo(),n.getLeer,i.prepend(f(n)),l.guardar_LocalStorage()},t.createProject=function(e){e.preventDefault();let t=this.nameProject.value,r=function(e){let t=!0;return a.almacenarProject.forEach((r=>{r.nameProject==e&&(alert("ya esxiste un proyecto con ese nombre"),t=!1)})),t}(t);if(!r)return;let o=new a.Project;o.setNumId=h(a.almacenarProject),o.setNameProject=t,o.guardar(),console.log(o.getLeer),d.appendChild(g(o.getLeer)),l.guardar_LocalStorageProject()},t.showTareaProject=j,t.tareaProject=function(e){e.preventDefault(),p.style.visibility="hidden";let t=this.nameTareaProject.value;if(""==t)return alert("nombre invalido");let r=this.descTareaProject.value,o=this.dateTareaProject.value,c=h(a.almacenar),n=new a.TareaProject;n.setTitle=t,n.setDesc=r,n.setDueDate=o,n.setNameProject=m.innerHTML,n.setId=c,n.guardar(),console.log(n.getLeer),u.appendChild(f(n)),l.guardar_LocalStorage()},t.mostrarDatos=f,t.createSelect=g,t.recorrerAlmacenarProject=y},425:(e,t,r)=>{const a=r(431),o=r(626),c=(document.querySelector(".containerProjectssSelect"),document.querySelector(".containerProjectss")),n=document.querySelector(".containerToday"),s=document.querySelector(".container");t.eliminarProjecto=function(e){confirm("Seguro que desea eliminar el proyecto?")&&(function(e){o.almacenar.forEach(((t,r,a)=>{console.log("eliminar tarea"),t.project==e&&(console.log(t),a.splice(r,1))}))}(e),function(e){o.almacenarProject.forEach(((t,r,a)=>{console.log("afuasdasdasdera",t),t.nameProject==e&&(a.splice(r,1),console.log("deasd",o.almacenarProject))}))}(e),a.mostrarTareas())},t.eliminarElemento=function(e){let t=a.colocarTareaEnActualizado();1==t?s.removeChild(e):0==t?n.removeChild(e):null==t?c.removeChild(e):console.log("colocarTareaEnActualizado Error")},t.removerHijo=function(e){o.almacenar.forEach(((t,r,a)=>{e==t.numId&&a.splice(r,1)}))}},431:(e,t,r)=>{const a=r(626),o=r(724),c=r(201),n=document.querySelector(".containerProjectss"),s=document.querySelector(".container"),l=document.querySelector(".containerToday"),i=document.querySelector(".tareasSelect"),d=document.querySelector(".todaySelect"),u=document.querySelector(".allProjects");function m(){s.style.visibility="hidden",l.style.visibility="hidden",n.style.visibility="hidden"}function p(){m(),s.innerText="",a.almacenar.forEach((e=>{let t=o.mostrarDatos(e);s.prepend(t)})),g("tareas"),s.style.visibility="visible"}function h(){m(),l.innerText="",a.almacenar.forEach((e=>{let t=function(e){if(null!=e.dueDate&&c.htmlToday(e.dueDate))return!0}(e);if(t){let t=o.mostrarDatos(e);l.prepend(t)}})),g("today"),l.style.visibility="visible"}function g(e){i.classList.remove("class"),d.classList.remove("class"),u.classList.remove("class"),"tareas"==e?i.classList.add("class"):"today"==e?d.classList.add("class"):"project"==e?u.classList.add("class"):console.log("errro colorSelect")}function j(){return"visible"==s.style.visibility||"visible"!=l.style.visibility&&void("visible"!=n.style.visibility&&console.log("colocarTareaEnActualizado Error"))}e.exports={mostrarTareas:p,mostrarToday:h,mostrarProjectss:function(){g("project"),n.innerText="",m(),n.style.visibility="visible"},colocarTareaEnActualizado:j,insertarDom:function(e){let t=j();var r;1==t?p():0==t?h():null==t?(r=e,a.almacenarProject.forEach((e=>{e.nameProject==r&&o.showTareaProject(e)}))):console.log("erro insertarDom")}}},639:(e,t,r)=>{document.querySelector(".container");const a=r(626),o=(r(724),r(431)),c=document.querySelector(".projectNameEdit"),n=r(158);t.actualziarDatos=function(e){let t=document.formularioEdit;e.preventDefault(),a.almacenar.forEach((e=>{e.numId==c.innerHTML&&(e.title=t.nameTaskEdit.value,e.desc=t.descTaskEdit.value,e.dueDate=t.dateTaskEdit.value,o.insertarDom(e.project))})),n.guardar_LocalStorage(),document.formularioEdit.style.visibility="hidden"},t.editHijo=function(e){c.innerText=e.numId;let t=document.formularioEdit;t.nameTaskEdit.value=e.title,t.descTaskEdit.value=e.desc,t.dateTaskEdit.value=e.dueDate}},201:(e,t)=>{let r="",a=[];document.querySelector(".dateTask"),t.htmlToday=function(e){return r=e,function(){const e=new Date;let t=e.getUTCDate(),r=e.getMonth()+1,o=e.getUTCFullYear();a.push(t),a.push(r),a.push(o)}(),function(){let e=r.split("-"),t=parseFloat(e[2]),o=parseFloat(e[1]),c=parseFloat(e[0]),n=parseFloat(a[0])-t,s=parseFloat(a[1])-o,l=parseFloat(a[2])-c;if(l<1&&l>-1&&s<1&&s>-1&&n<=1&&n>=-1)return!0}()}},158:(e,t,r)=>{const a=r(626);t.guardar_LocalStorage=function(){localStorage.setItem("tarea",JSON.stringify(a.almacenar))},t.recuperar_LocalSotrage=function(){console.log("entro");let e=JSON.parse(localStorage.getItem("tarea")),t=JSON.parse(localStorage.getItem("project"));e.forEach((e=>{a.almacenar.push(e)})),t.forEach((e=>{a.almacenarProject.push(e)}))},t.guardar_LocalStorageProject=function(){localStorage.setItem("project",JSON.stringify(a.almacenarProject))}},83:(e,t)=>{const r=document.querySelector(".formsPrincpales"),a=document.querySelector(".container"),o=document.querySelector(".barra"),c=document.querySelector(".containerProjectss"),n=document.querySelector(".containerToday");t.showMenu=function(){console.log("menu"),r.classList.toggle("formsPrincpales-oculto"),o.classList.toggle("barraColor"),a.classList.toggle("colorActive"),c.classList.toggle("colorActive"),n.classList.toggle("colorActive")}}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,r),c.exports}(()=>{const e=r(83),t=r(724),a=(r(626),r(431)),o=r(639),c=r(158),n=document.querySelector(".barra"),s=(document.querySelector(".formularioEdit-btn"),document.querySelector(".vemosTexto")),l=document.querySelector(".tareasSelect"),i=document.querySelector(".todaySelect");document.querySelector(".containerProjectssSelect"),document.formulario.addEventListener("submit",t.getFormulario),document.formularioEdit.addEventListener("submit",o.actualziarDatos),document.createProject.addEventListener("submit",t.createProject),document.tareaProject.addEventListener("submit",t.tareaProject),n.addEventListener("click",e.showMenu),s.addEventListener("click",(function(t){t.stopPropagation(),e.showMenu()}),capture=!0),l.addEventListener("click",(function(){a.mostrarTareas(),e.showMenu()})),i.addEventListener("click",(()=>{a.mostrarToday(),e.showMenu()})),c.recuperar_LocalSotrage(),t.recorrerAlmacenarProject(),a.mostrarTareas()})()})();