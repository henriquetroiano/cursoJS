//// forEach e Array
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);
titulosArray.forEach(function(item){
 console.log(item);
});

// Arrow Function
// Sintaxe curta em relação a function expression . Basta
// remover a palavra chave function e adicionar a fat arrow => após
// os argumentos.
const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
 console.log(item);
});

//Argumentos e Parênteses

const imgs = document.querySelectorAll('img');
// argumento único não precisa de parênteses
imgs.forEach(item => {
 console.log(item);
});
// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
 console.log(item, index);
});
// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
 console.log(i++);
});

// Return
// É possível omitir as chaves {} para uma função que retorna uma linha.
const imgs = document.querySelectorAll('img');
imgs.forEach(item =>
 console.log(item)
);
imgs.forEach(item => console.log(item));

// Não é permitido fechar a linha com ;

/////////////////////////////////////////////////////////EXERCICIOS
// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach(item, index => {
 console.log(item, index);
});
let i = 0;
imgs.forEach( => {
 console.log(i++);
});
imgs.forEach(() => i++);


// const imgs = document.querySelectorAll('img');
// console.log(imgs);


// imgs.forEach(function(item, index, array) {
//   // console.log(item, index, array)
// })

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);
// titulosArray.forEach(function(item){
//  console.log(item);
// });

const imgs = document.querySelectorAll('img');
console.log(imgs);


imgs.forEach((item, index, array) => {
  console.log(item, index, array)
})