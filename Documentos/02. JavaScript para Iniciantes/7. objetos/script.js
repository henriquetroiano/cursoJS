// EXERCÍCIOS

// Crie um objeto  com os seus dados pessoais
// Deve possuir pelo menos duas propriedades, ex: nome e sobrenome

var personalData = {
  name: 'Henrique',
  lastName: 'Troiano',
  age: '23',
  race: 'White',
}

//  Crie um método no objeto anterior que mostre seu nome completo
personalData.fullName = function() {
  return `${this.name} ${this.lastName}`;
}
/////////////////////////////OK ^^ //////////////////////

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem

var cachorro = {
  cor: 'preto',
  idade: 10,
  raca: ' labrador ',
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'latir'
    } else {
      return 'Nada'
    }
}
}



