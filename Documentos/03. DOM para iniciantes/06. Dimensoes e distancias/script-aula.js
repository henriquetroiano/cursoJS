
// Height e Width

// Estas são propriedades e métodos dos objetos Element e HTMLElement , a maioria delas são Read Only

// const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth ...

const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;

console.log(height)



// osetTop e osetLeft

// const section = document.querySelector('.animais');

// // Distância entre o topo do elemento e o topo da página
// section.offsetTop;
// // Distância entre o canto esquerdo do elemento e o canto esquerdo da página
// section.offsetLeft;

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left)


// getBoundingClientRect()

// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

// const section = document.querySelector('.animais');

// const rect = section.getBoundingClientRect();
// rect.height; // height do elemento
// rect.width; // width do elemento
// rect.top; // distância entre o topo do elemento e o scroll

const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect.top)

if(h2rect.top < 0) {
  console.log('PASSOU DO ELEMENTO')
}



// Window

// window.innerWidth; // width do janela
// window.outerWidth; // soma dev tools também
// window.innerHeight; // height do janela
// window.outerWidth; // soma a barra de endereço
// window.pageYOffset; // distância total do scroll horizontal
// window.pageXOffset; // distância total do scroll vertical
// if(window.innerWidth < 600) {
//  console.log('Tela menor que 600px');
// }

console.log(
  window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerWidth, // soma a barra de endereço
window.pageYOffset, // distância total do scroll horizontal
window.pageXOffset, // distância total do scroll vertical

)





// matchMedia();

// Utilize um media-querie como no CSS para vericar a largura do
// browser

// if(small.matches) {
//   console.log('Tela menor que 600px')
//  } else {
//   console.log('Tela maior que 600px')
//  }

const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
  console.log('usuário mobile');
}


//  Dica

//  Selecione o elemento no inspetor (dom)
// Abra o console e digite $0 para selecionar o
// mesmo
// Os elementos selecionados anteriormente
// são $1, $2 ...