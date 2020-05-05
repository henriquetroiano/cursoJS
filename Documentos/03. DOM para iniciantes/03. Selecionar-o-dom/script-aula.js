console.log('/////////////// ID');
/* getElementById Seleciona e retorna elementos do DOM

//Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

//retorna null caso não exista
const nao Existe = document.getElementById('teste'); */

const animais = document.getElementById('animais');
console.log(animais)

console.log('/////////////// CLASSE E TAG')
/* getElementsByClassName e getElementsByTagName
 selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grd-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento 
console.log(gridSection[0]); */

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0])

console.log('//////////////////// SELETOR GERAL ÚNICO')

/* querySelector retorna o primeiro elemento que combinas com o seu seletor CSS. 

const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li'); */

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('Ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

console.log('//////////////// SELETOR GERAL LISTA');

/* querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList.

const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection[1]);

Diferentemente do getElementsByClassName, a lista aqui é estática */

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

console.log('///////////////////// HTMLCollection vs NodeList');

/* A diferença está nos métodos e propriedades de ambas. Além disso, a NodeList retornada com querySelectorAll é estática. 

const titulo = document.querySelector('.titulo');
const gridSectioHTML = document.getElementsByClassName('gris-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectioHTML); // 4 itens
console.log(gridSectionNode); // 3 itens */

const gridSectioHTML = document.getElementsByClassName('grid-section');
const gridSectioNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectioHTML[0]);
console.log(gridSectioNode[0]);

console.log('////////////////////////// ARRAY-LIKE');

/* HTMLCollection e Nodelist são array-like, parecem uma array mas não são. O método Array forEach() por exemplo, existe apenas em NodeList. 

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index); // index do item na array
  console.log('array'); // a array completa
});

É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection) */

gridSectioNode.forEach(function(item, index, array) {
  console.log(item, index);
})

const arrayGrid = Array.from(gridSectioHTML);
arrayGrid.forEach(function(item, index, array) {
  console.log(item)
})













