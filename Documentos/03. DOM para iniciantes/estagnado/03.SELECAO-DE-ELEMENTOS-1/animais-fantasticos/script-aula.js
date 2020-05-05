// ///////////SELECIONANDO ELEMENTOS///////////////////////

// ///////////////////SELECIONAR PELO ID

// const animais = document.getElementById('animais');
// console.log(animais);

// // ///////////////////SELECIONAR PELA CLASSE

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);

// ///////////////////SELETOR GERAL ÚNICO

// /* Query Selector  - retorna o primeiro elemento que combinar com o seu seletor CSS*/

// // const animais = document.querySelector('.animais');
// // const contato = document.querySelector('#contato');
// // // const ultimoItem = document.querySelector('.animais-lista li:last');
// // const linkCSS = document.querySelector('[href^="https://"]');
// // const primeiroUl = document.querySelector('ul');


// // // Busca dentro da Ul apenas:
// // const navItem = primeiroUl.querySelector('li');

const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos);

// // // QUERY SELECTOR ALL

// const animaisImg = document.querySelectorAll('.animais img')
// console.log(animaisImg);

/////////////////////////////////////////////////////////////////////////////////////////

///HTML COLLECTION

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index) {
  console.log(item);

})

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function(item) {
  console.log(item)
})











