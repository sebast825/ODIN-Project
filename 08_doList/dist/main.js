(()=>{var e={626:e=>{let t=[],a=[],o=class{constructor(e,t,a,o,r=!1){this.numId=e,this.title=t,this.desc=a,this.dueDate=o,this.complete=r}asd(){let e={numId:this.numId,title:this.title,desc:this.desc,dueDate:this.dueDate,complete:this.complete};t.push(e),console.log(t)}leer(){return{numId:this.numId,title:this.title,desc:this.desc,dueDate:this.dueDate,complete:this.complete}}};e.exports={Tarea:o,almacenar:t,Project:class{constructor(e){this.nameProject=e}guardar(){let e={nameProject:this.nameProject};a.push(e),console.log(a)}},almacenarProject:a,TareaProject:class extends o{constructor(e,t,a,o,r,n){super(e,t,a,o,n),this.project=r}guardar(){let e=super.leer();e.project=this.project,t.push(e),console.log(t)}leer(){let e=super.leer();return e.project=this.project,e}}}},724:(e,t,a)=>{const o=a(626),r=a(639),n=a(431);let l=document.querySelector(".container"),c=document.querySelector(".projectName"),i=document.querySelector(".containerToday"),s=document.querySelector(".containerProjectss"),d=document.querySelector(".formularioEdit"),u=document.querySelector(".tareaProject"),m=document.querySelector(".containerProjectssSelect");function v(){let e;if(0==o.almacenar.length)e=0;else{let t=o.almacenar[o.almacenar.length-1];e=parseInt(t.numId)+1}return e}function p(e){let t=document.createElement("DIV"),a=document.createElement("DIV"),c=document.createElement("DIV"),u=document.createElement("DIV"),m=document.createElement("H2"),v=document.createElement("P"),p=document.createElement("P"),h=document.createElement("P"),T=document.createElement("P");var f;return t.classList.add("divTarea"),c.classList.add("descDate"),u.classList.add("btnDiv"),a.classList.add("miniCont"),v.classList.add("descTask"),p.classList.add("dateTask"),h.innerHTML='<i class="fas fa-trash-alt"></i>',T.innerHTML='<i class="fas fa-edit"></i>',m.innerText=e.title,v.innerText=e.desc,p.innerText=null!=(f=e.dueDate)?f:"",u.appendChild(h),u.appendChild(T),c.appendChild(v),c.appendChild(p),t.appendChild(m),a.appendChild(c),a.appendChild(u),t.appendChild(a),T.addEventListener("click",(()=>{d.style.visibility="visible",r.editHijo(e)})),h.addEventListener("click",(()=>{var a;!function(e){let t=n.colocarTareaEnActualizado();1==t?l.removeChild(e):0==t?i.removeChild(e):null==t?s.removeChild(e):console.log("colocarTareaEnActualizado Error")}(t),a=e,o.almacenar.forEach(((e,t,r)=>{a.numId==e.numId&&(console.log(e),r.splice(t,1),console.log(o.almacenar))}))})),t}function h(e){let t=document.createElement("DIV"),a=document.createElement("H2"),o=document.createElement("P");t.classList.add("divProject"),o.innerHTML='<i class="fas fa-plus"></i>',t.setAttribute("name",e.nameProject),t.classList.add(e.nameProject),a.innerText=e.nameProject,t.appendChild(a),t.appendChild(o),s.appendChild(t),o.addEventListener("click",(()=>{console.log("visible"),u.style.visibility="visible",c.innerText=e.nameProject}))}function T(e){console.log("showp 1"),s.innerHTML="<h2>Project </h2>",h(e),o.almacenar.forEach((t=>{if(t.project==e.nameProject){let e=p(t);s.appendChild(e)}}))}function f(e){o.almacenarProject.forEach((t=>{t.nameProject==e&&T(t)}))}t.getFormulario=function(e){e.preventDefault();let t=this.nameTask.value;if(""==t)return alert("nombre invalido");let a=this.descTask.value,r=this.dateTask.value?this.dateTask.value:void 0,l=v();console.log(l);let c=new o.Tarea(l,t,a,r);c.asd();let i=c.leer();n.colocarTareaEn(i)},t.mostrarDatos=p,t.createProjec=function(e){e.preventDefault();let t=this.nameProject.value,a=function(e){let t=!0;return o.almacenarProject.forEach((a=>{a.nameProject==e&&(alert("ya esxiste un proyecto con ese nombre"),t=!1)})),t}(t);if(!a)return;let r=new o.Project(t);r.guardar(),h(r),function(e){let t=document.createElement("DIV"),a=document.createElement("h2");t.classList.add("divProjectSelect"),t.classList.add(e.nameProject),a.innerText=e.nameProject,t.appendChild(a),m.appendChild(t),T(e),t.addEventListener("click",(()=>{n.mostrarProjectss(),T(e)}))}(r)},t.tareaProject=function(e){e.preventDefault();let t=this.nameTareaProject.value;if(""==t)return alert("nombre invalido");let a=this.descTareaProject.value,r=this.dateTareaProject.value?this.dateTareaProject.value:void 0,n=c.innerHTML,l=v();new o.TareaProject(l,t,a,r,n).guardar(),f(c.innerHTML)},t.bsucarPorjecto=f},431:(e,t,a)=>{const o=a(626),r=a(724),n=a(201),l=document.querySelector(".containerProjectss"),c=document.querySelector(".container"),i=document.querySelector(".containerToday");function s(){c.style.visibility="hidden",i.style.visibility="hidden",l.style.visibility="hidden"}function d(){s(),c.innerText="",o.almacenar.forEach((e=>{console.log("mosstartareastotales");let t=r.mostrarDatos(e);c.appendChild(t)})),c.style.visibility="visible"}function u(){s(),i.innerText="",o.almacenar.forEach((e=>{if(m(e)){let t=r.mostrarDatos(e);i.prepend(t)}})),i.style.visibility="visible"}function m(e){if(console.log("asd"),console.log(e),console.log("comienzo"),null!=e.dueDate&&(console.log(e),n.htmlToday(e.dueDate)))return console.log("entro"),!0}t.mostrar=s,t.colocarTareaEn=function(e){let t=r.mostrarDatos(e);"visible"==c.style.visibility?c.prepend(t):"visible"==i.style.visibility?m(e)&&i.prepend(t):console.log("No estas en tareas ni en today")},t.mostrarTareas=d,t.mostrarToday=u,t.mostrarProjectss=function(){s(),l.style.visibility="visible"},t.mostrarTareaActualizada=function(){formularioEdit.style.visibility="hidden",setTimeout((function(){"visible"==c.style.visibility?(console.log("container"),d()):"visible"==i.style.visibility?(console.log("containertoday"),u()):console.log("error evento formularioEditBtn")}),1)},t.colocarTareaEnActualizado=function(){return"visible"==c.style.visibility||"visible"!=i.style.visibility&&void("visible"!=l.style.visibility&&console.log("colocarTareaEnActualizado Error"))},t.mostrarTareas=d,t.mostrarToday=u},639:(e,t,a)=>{const o=a(626),r=a(724),n=a(431);document.querySelector(".container"),document.querySelector(".containerProjectss"),document.querySelector(".containerToday");let l=document.querySelector(".projectNameEdit"),c=[];t.editarTarea=function(e){e.preventDefault();let t=function(){let e,t,a=document.formularioEdit,r=a.nameTaskEdit.value,n=a.descTaskEdit.value,i=a.dateTaskEdit.value?a.dateTaskEdit.value:void 0,s=c;return"-"!=l.innerText&&(e=l.innerHTML),t=e?new o.TareaProject(s,r,n,i,e):new o.Tarea(s,r,n,i),console.log(t),console.log(o.almacenar),t}();o.almacenar.forEach(((e,a,r)=>{c==e.numId&&(r.splice(a,1,t),console.log(o.almacenar))})),function(e){let t=n.colocarTareaEnActualizado();1==t?r.mostrarTareas:0==t?r.mostrarToday:null==t?r.bsucarPorjecto(e):console.log("erro insertarDom")}(t.project)},t.editHijo=function(e){e.project?(l.innerText=e.project,console.log("editHIJO:",l.innerText)):l.innerText="-";let t=document.formularioEdit;c=e.numId,t.nameTaskEdit.value=e.title,t.descTaskEdit.value=e.desc,t.dateTaskEdit.value=e.dueDate}},201:(e,t)=>{let a="",o=[];document.querySelector(".dateTask"),t.htmlToday=function(e){return a=e,function(){const e=new Date;let t=e.getUTCDate(),a=e.getMonth()+1,r=e.getUTCFullYear();o.push(t),o.push(a),o.push(r)}(),function(){console.log(a,"nueva fecha");let e=a.split("-");console.log(e,"nueva fecha");let t=parseFloat(e[2]),r=parseFloat(e[1]),n=parseFloat(e[0]),l=parseFloat(o[0])-t,c=parseFloat(o[1])-r,i=parseFloat(o[2])-n;if(console.log("nueva fecha",a),i<1&&i>-1&&c<1&&c>-1&&l<=1&&l>=-1)return console.log("esta en el if"),console.log("restarDay",l,"restarMonth",c,i),!0;console.log("nueva fecha",a),console.log("fecha actual",o),console.log(t,r,n),console.log(o[2],o[1],o[0])}()}}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,a),n.exports}(()=>{const e=a(724),t=a(639),o=a(431),r=document.querySelector(".tareasSelect");document.querySelector(".todaySelect").addEventListener("click",o.mostrarToday),r.addEventListener("click",o.mostrarTareas);const n=document.querySelector(".tareaProject-btn"),l=document.querySelector(".formularioEdit-btn");n.addEventListener("click",(()=>{tareaProject.style.visibility="hidden"})),document.formulario.addEventListener("submit",e.getFormulario),document.formularioEdit.addEventListener("submit",t.editarTarea),document.createProject.addEventListener("submit",e.createProjec),document.tareaProject.addEventListener("submit",e.tareaProject),l.addEventListener("click",o.mostrarTareaActualizada)})()})();