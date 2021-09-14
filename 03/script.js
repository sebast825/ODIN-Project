const div = document.querySelector('.div');
const p = document.querySelector('.p');
const h3 = document.querySelector('.h3');

let h= document.createElement('h1');
h.innerText = ' “I’m in a div”'


div.appendChild(h)

p.style['color']='red'
h3.style['color']='blue'

const btn = document.querySelector('#btn');
btn.addEventListener('keypress','k', function (e) {
	console.log(e.target);
  });