/////////////////////////////////////////////////////////EXERCICIOS
// Mostre no console cada parágrado do site
const todosP = document.querySelectorAll('p');
console.log(todosP)
todosP.forEach((item) => {
  console.log(item)
});



// Mostre o texto dos parágrafos no console
const todosP2 = document.querySelectorAll('p');
console.log(todosP2)
todosP2.forEach((item) => {
  console.log(item.innerText)
});

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