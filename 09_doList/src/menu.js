const formsPrincpales = document.querySelector('.formsPrincpales');



const container = document.querySelector('.container');

const containerProjectss = document.querySelector('.containerProjectss');
const containerToday = document.querySelector('.containerToday');
function showMenu(){
	
	formsPrincpales.classList.toggle('formsPrincpales-oculto');
	
	container.classList.toggle('colorActive')	
	containerProjectss.classList.toggle('colorActive')	
	containerToday.classList.toggle('colorActive')
	
}

exports.showMenu = showMenu;