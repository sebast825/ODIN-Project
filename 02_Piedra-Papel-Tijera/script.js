let input = parseInt(prompt('ingresa 0\:piedra 1\:papel 2\:tijera'))
let maquina = ['piedra','papel','tijera']

let valorInput = maquina[input]

let comparar = (valorInput)=>{
    let num = Math.floor(Math.random()*3)+0;
    compu = maquina[num]
    if (valorInput=='piedra'){
        if (compu=='tijera'){
            console.log('ganaste,piedra mata a tijera')
        }else if(compu=='papel'){
            console.log('perdiste, papel mata a piedra')
        }else{
            console.log('empate')
        }
    }
    else if (valorInput=='papel'){
        if (compu=='piedra'){
            console.log('ganaste,papel mata a piedra')
        }else if(compu=='tijera'){
            console.log('perdiste, tijera mata a papel')
        }else{
            console.log('empate')
        }
    }
    else if (valorInput=='tijera'){
        if (compu=='papel'){
            console.log('ganaste,tijera mata a papel')
        }else if(compu=='piedra'){
            console.log('perdiste, tijera mata a piedra')
        }else{
            console.log('empate')
        }
    }
    else{
        console.log('ingresaste un valor invalido')
    }
}
comparar(valorInput)