console.log('///////MANIPULAR CLASSES E ATRIBUTOS');

// classList

// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

// const menu = document.querySelector('.menu');

// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo'); 

const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho'
console.log(menu.className)



console.log('ATRIBUTOS')
// console.log(menu.classList.remove('azul'));

// Retorna uma array-like com os atributos do elemento.

// const animais = document.querySelector('.animais');

// animais.attributes; // retorna todos os atributos
// animais.attributes[0]; // retorna o primeiro atributo

const animais = document.querySelector('.animais');
console.log(animais.attributes);



// getAttribute e setAttribute

// Métodos que retornam ou denem de acordo com o atributo selecionado
// É muito comum métodos de get e set;

// const img = document.querySelector('img');

// img.getAttribute('src'); // valor do src
// img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
// img.hasAttribute('id'); // true / false
// img.removeAttribute('alt'); // remove o alt
// img.hasAttributes(); // true / false se tem algum atributo

// É muito comum métodos de get e set;

const img = document.querySelector('img');

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma Raposa!')
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);



console.log(img.getAttribute('alt'))  


console.log('//READ ONLY VS WRITABLE');
// /* className = 


// Existem propriedades que não permitem a mudança de seus
// valores, essas são considerados Read Only, ou seja, apenas leitura.

// const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string
// animais.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ' '

const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`Andou ${km}`);
  }
}

console.log(`O carro tem ${carro.portas} portas`);






