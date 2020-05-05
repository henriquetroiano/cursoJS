/////////////////////////////////exercícios/////////////////////////////

// Retorne no console todas as imagens do site

const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const animaisImg = document.querySelectorAll('img[src^="img/imagem"]')
console.log(animaisImg);

// Selecione todos os links internos (onde o href começa com #)
const animaisImg2 = document.querySelectorAll('[href^="#"]');
console.log(animaisImg2)

// Selecione o primeiro h2 dentro de .animais-descrição
const selecionarH2 = document.querySelector('.animais-descricao h2');
console.log(selecionarH2);

//selecione o último p do site
const ultimoPsite = document.querySelectorAll('p');
console.log(ultimoPsite[ultimoPsite.length - 1]);


