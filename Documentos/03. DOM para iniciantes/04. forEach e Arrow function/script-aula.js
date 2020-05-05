console.log('/////////////////// FOR EACH E ARROW FUNCTION');

console.log('// forEach');

/* Constantemente vamos selecionar uma lista de itens do DOM. a melhor forma para interagirmos com os mesmos é utilizando o método forEach. 

const imgs = document.querySelectorAll('img');
imgs.forEach(function(item) {
  console.log(item)
}); */

//parâmetros do forEach
/* O parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber 3 parâmetro:
valorAtual, index e array. */

// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array) {
//   console.log(item); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a array completa
// });

// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item, index, array) {
//   // console.log(item, index)
//   console.log('console ocutado para não atrapalhar')
  
// } );

console.log('// forEach e Array');

/* for Each é um método de Array, alguns objetos array-like possuem esse método. Caso não possua, o ideal é transformá-los em uma array */

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item) {
  console.log(item);
})

console.log('///Arrow function');

/*Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos. 

const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
  console.log(item);
}) */

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index, array)  => {
  console.log(item)
  } );

  // Argumentos e parênteses
/*
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
}); DE PREFERÊNCIA SEMPRE USAR OS PARÊNTESES */

//não precisa de chaves se tiver 1 return
let i = 0;
imgs.forEach(() => console.log(i++));



















