
function saludar (){
console.log('asdasaada.js')}

function apenChil(){
	saludar()
	console.log('asd')
	const cont = document.getElementById('content');
	let div = document.createElement('DIV');
	let a = document.createElement('A');
	a.setAttribute('href',"http://www.google.es")
	a.setAttribute('target','_blank')
	a.innerHTML=('atr')
	div.innerText='aasd'
	cont.appendChild(div)
	cont.appendChild(a)
}




 export default apenChil
// export default saludar