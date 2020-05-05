console.log('// Retorne no console todas as imagens do site')

const todasImg = document.getElementsByTagName('img');
console.log(todasImg);

console.log('// Retorne no console apenas as imagens que comecam com a palavra imagem');
const imagensImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensImg);

console.log('// Selecione todos os links internos (onde o href começa com #)');
const selecionaInterno = document.querySelectorAll('[href^="#"]');
console.log(selecionaInterno);

console.log('// selecione o primeiro h2 dentro de .animais-descricao');
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

console.log('// selecione o selecione o último p do site');
// const ultimoP = document.getElementsByTagName('p')
// const arrayUltimoP = Array.from(ultimoP);
// console.log(arrayUltimoP[arrayUltimoP.length - 1]);

//////ou
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);
///ou
console.log(ultimoP[--ultimoP.length]);




