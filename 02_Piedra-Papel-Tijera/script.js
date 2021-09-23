const piedra = document.querySelectorAll('.elegir');
const resultado = document.querySelector('.resultado');
const valores = document.querySelector('.valores')
const puntosMaq = document.querySelector('.puntosMaquina');
const puntosPers = document.querySelector('.puntosPersona')
// let input = parseInt(prompt('ingresa 0\:piedra 1\:papel 2\:tijera'))
let maquina = ['piedra','papel','tijera']
let puntosMaquina = 0;
let puntosPersona = 0;
//escribe la respuesta que se va a ver
let valor=''
// let valorInput = maquina[input]

//compara entre la mauina y la persona
let comparar = (valorInput)=>{
    let num = Math.floor(Math.random()*3)+0;    
    let rsta ;      
    compu = maquina[num]
    if (valorInput=='piedra'){
        if (compu=='tijera'){
            rsta=0
        }else if(compu=='papel'){
            rsta=1
        }else{
            rsta=2
        }

    }
    else if (valorInput=='papel'){
        if (compu=='piedra'){
            rsta=0
        }else if(compu=='tijera'){
            rsta=1
        }else{
            rsta=2
        }
    }
    else if (valorInput=='tijera'){
        if (compu=='papel'){
            rsta=0
        }else if(compu=='piedra'){
            rsta=1
        }else{
            rsta=2
        }
    }
    else{
        
        rsta=('error')
        
    }
   
    contarPuntos(rsta,valorInput,compu);
}

//cuenta los puntos
function contarPuntos(rsta,valorInput,compu){
    if (rsta==0){
        puntosPersona+=1
        valor='Ganaste!'
    }else if(rsta==1){
        puntosMaquina+=1
        valor = 'Perdiste!'
    }else{
        valor= 'Es un Empate!'
    }
    puntosPers.innerText = puntosPersona;
    puntosMaq.innerText = puntosMaquina;

    //para finalizar dice cuando se gana el total de rondas
    if(puntosPersona==2){
        valor ="Felicitaciones Ganaste!"
        reiniciar()
       resultado.innerText = ""
   }else if(puntosMaquina==2){
       valor= "Lo siente, Perdiste!"
       reiniciar()
   }
    valores.innerText= valor
    resultado.innerText = ` ${valorInput} Vs ${compu}`
    
}
//reinicia los contadores
function reiniciar(){
    puntosMaquina=0
    puntosPersona=0
}

piedra.forEach(pie=>pie.addEventListener('click',function(){
    let valor= (pie.dataset.valor)
    comparar(valor)
}));

