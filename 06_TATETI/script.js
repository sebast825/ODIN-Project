const X_CLASS = 'X';
const CIRCLE_CLASS = 'circle'; 
const cellElements = document.querySelectorAll('[data-cell] ');
// const container = document.querySelector('.container');
// const btnIniciar = document.querySelector('.iniciar');

let circleTurn;
const ganar= [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[6,4,2]
];

cellElements.forEach(elem=>elem.addEventListener('click',handleClick,{once:true}))


function handleClick(e){
	const cell = e.target//es como poner this
	const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

	placeMark(cell,currentClass)
}

function placeMark(cell,currentClass){
	cell.classList.add(currentClass)
	console.log('placeMark')
}


