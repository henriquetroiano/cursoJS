// Mostre no console cada parágrado do site
const mostrarParagrafo = document.getElementsByTagName('p');
const mostrarParagrafo2 = Array.from(mostrarParagrafo);
mostrarParagrafo2.forEach((item) => {
  console.log(item);
});

console.log('/////// OU');

const mostrarParagrafo3 = document.querySelectorAll('p');
mostrarParagrafo3.forEach((item) => console.log(item));


// Mostre o texto dos parágrafos no console
const mostrarParagrafo4 = document.getElementsByTagName('p');
const mostrarParagrafo5 = Array.from(mostrarParagrafo);
mostrarParagrafo5.forEach((item) => {
  console.log(item.innerText);
});

console.log('/////// OU');

const mostrarParagrafo6 = document.querySelectorAll('p');
mostrarParagrafo6.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
 console.log(item, index);
});


let i = 0;
imgs.forEach( () => {
 console.log(i++);
});

imgs.forEach(() => i++);
console.log(i)