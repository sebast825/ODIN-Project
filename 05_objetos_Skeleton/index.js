const tablaBody = document.querySelector('.tablaTbody');
const prueba = document.getElementById('prueba');
const eliminarLibro = document.querySelectorAll('.delete');
const divLibro = document.querySelector('.container__libro');
let myLibrary = [];

let Book = class Book{
  constructor(title,author,page,read){
    this.title = title,
    this.author = author,
    this.page = page,
    this.read = read
  }
  info(){
    return(` hola ${this.title}, ${this.author}, ${this.page}, ${this.read}  `);
  }
}


function addLibrary(elem){
  myLibrary.push(elem);
}
function recorrerLibrary(){
 myLibrary.forEach(elem=>{
  // insertarTabla(elem);
  insertarLibro(elem)
  })
}
function insertarLibro(elem){
  let div = document.createElement('DIV');
  div.classList.add('libro__unico')
  let borrar = document.createElement('button');
  borrar.classList.add('delete');
  borrar.innerText='Delete';
   
  let tdTitle = document.createElement('H2');
  let tdAuthor = document.createElement('H3');
  let tdPage= document.createElement('H4');
  let tdRead = document.createElement('H5');
  let check= document.createElement('INPUT');
  check.setAttribute('type','checkbox')

  if(elem.read=='Yes')check.checked=true
  check.addEventListener('click',function(){
    if(!this.checked){    
      //EDITA EL ELEMENTO DONDE ESTA GUARDADO     
      elem.read='No'
       console.log(myLibrary)
    }else{      
       elem.read='Yes'
       console.log(myLibrary)    
    }
    guardar_LocalStorage()
  })


  tdTitle.innerText=`${elem.title} `;
  tdAuthor.innerText=`${elem.author} `;
  tdPage.innerText=`Paginas: ${elem.page} `;
  tdRead.innerText=`Terminado:`
   tdRead.appendChild(check);   
     
  div.appendChild(tdTitle);
  div.appendChild(tdAuthor);
  div.appendChild(tdPage);
  div.appendChild(tdRead);
  div.appendChild(borrar);

  divLibro.appendChild(div);

  borrar.addEventListener('click',function(){
    //para sacarlo del dom
    divLibro.removeChild(div)
    //para sacarlo del local dnd se guarda
    myLibrary.pop(elem)
    console.log(elem)
    guardar_LocalStorage()
 
})
guardar_LocalStorage()
}

//  let thehobit = new Book('elhobit','niidea',450,true);
// let harry = new Book('harry','popo',320,'Yes');

// addLibrary(thehobit);
// addLibrary(harry);


function insertarLibrary(e){
  e.preventDefault()
  let info= [this.bookName.value,this.author.value,this.pages.value,this.read.value]
  console.log(info)
  if(info[0]=="" || info[1]=="" || info[2] == ""){  return alert('completar campos')}
  let elem = new Book(info[0],info[1],info[2],info[3])

  addLibrary(elem)
  insertarLibro(elem)
}

document.formulario.addEventListener('submit',insertarLibrary)

recorrerLibrary()



//queda guardado en la pc que lo creo

function recuperar_LocalSotrage(){
  console.log('entro')
  let atr = JSON.parse(localStorage.getItem('item'))
  console.log('asd',atr)
  myLibrary=atr
  myLibrary.forEach(elem=>{
    insertarLibro(elem)
  })
}

recuperar_LocalSotrage()

function guardar_LocalStorage(){
  localStorage.setItem('item',JSON.stringify(myLibrary)
    
  )
}
guardar_LocalStorage()














