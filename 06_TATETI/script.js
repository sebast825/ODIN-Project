const X_CLASS='x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
const winningMessage = document.getElementById('winningMessage');
const dataWinningMessageText = document.querySelector('[data-winning-message-text]');
const restartButton = document.getElementById('restartButton');
let choiceClass;
const arrayWin = [
	[0,1,2,],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[6,4,2],
	[0,4,8]
]

startGame()

function startGame(){
	winningMessage.classList.remove('show')
	cellElements.forEach(cell=>{
		cell.classList.remove(X_CLASS);
		cell.classList.remove(CIRCLE_CLASS);
		
	})
	//al estar dentro de una funcion cuando se toca el boton de reinicio se re activan los eventos por lo de {once:true}
	cellElements.forEach(cell=>cell.addEventListener('click',handleClick,{once:true}))
}


function handleClick(e){
	let cell= e.target;
	let theClass = choiceClass ? X_CLASS : CIRCLE_CLASS;
	console.log(cell);
	cell.classList.add(theClass)
	
	if(win(theClass)){
		console.log('ganaste')
		endGame(true)
		
	}else if(isDraw()) {
		endGame(false)
		console.log('empate')
		
	}else{
		changeClass()
	}
	
}

function changeClass(){
	return choiceClass = !choiceClass
}

function endGame(bool){
	if(bool){
		winningMessage.classList.add('show')
		dataWinningMessageText.innerHTML = `${choiceClass ?   'X Wins' :'O Wins'}`
	}else{
		winningMessage.classList.add('show')
		dataWinningMessageText.innerHTML = `Draw!`
	}
}
function isDraw(){
	//importante el return si no no anda :v
	return [...cellElements].every(cel=>{
		return cel.classList.contains(X_CLASS)||cel.classList.contains(CIRCLE_CLASS)

	})
}

function win(theClass){
	//una de todas las opciones apra ganar
	return arrayWin.some(elem=>{
		//cada opcion representa el index de la cell
		return elem.every(index=>{
			//recorre todas las cell
			return [...cellElements][index].classList.contains(theClass)
		})
	})
}




restartButton.addEventListener('click',startGame)