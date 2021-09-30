const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle'; 
const cellElements = document.querySelectorAll('[data-cell] ');
const board = document.getElementById('board');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');

let circleTurn;
const WINNING_COMBINATIONS= [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[6,4,2]
];

startGame()
function startGame(){
	circleTurn=false;
	cellElements.forEach(elem=>{
		elem.classList.remove(X_CLASS);
		elem.classList.remove(CIRCLE_CLASS);
		elem.addEventListener('click',handleClick,{once:true})	
		})
		setBoardHoverClass()
		winningMessageElement.classList.remove('show')

}

function handleClick(e){
	const cell = e.target//es como poner this
	const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

	placeMark(cell,currentClass)
	
	if(checkWin(currentClass)){
		endGame(false)
	}else if(isDraw()){
		endGame(true)
	}else{
		swapTurns()
	setBoardHoverClass()
	}
}
//muestra al ganador, texto mas cambio en la pantalla
function endGame(draw){
	if(draw){
		winningMessageTextElement.innerText= ' Draw'
	}else{
		winningMessageTextElement.innerText = `${circleTurn ?'X Wins': 'O Wins'}`
	}
	winningMessageElement.classList.add('show')

}
//si tocas las cell tienen clase es que empataron
function isDraw(){
	// los[...] lo convierte en un array asi lo puede recorrer
	return [...cellElements].every(el=>{
		return el.classList.contains(X_CLASS)||el.classList.contains(CIRCLE_CLASS)
	})
}
//agrega la clase a cell que tiene x / o
function placeMark(cell,currentClass){
	cell.classList.add(currentClass)
	console.log('placeMark')
}

//hace que una vez sea o y otra x
function swapTurns(){
	circleTurn =!circleTurn
}

// le agrega las clases a la tabla, asi se puede ver el efecto hover
function setBoardHoverClass(){
	board.classList.remove(X_CLASS)
	board.classList.remove(CIRCLE_CLASS)
	if(!circleTurn){
		board.classList.add(X_CLASS)
	} else{
		board.classList.add(CIRCLE_CLASS)
	}
}

function checkWin(currentClass){
	return WINNING_COMBINATIONS.some(combination=>{
		return combination.every(index=> {
			return cellElements[index].classList.contains(currentClass)})
	})
}

restartButton.addEventListener('click',startGame)