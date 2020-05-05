// Objetos
/**
 * São conjuntos de variáveis e funções, que são chamadas de propriedades e métodos
 */

 var pessoa = {
   nome: 'André',
   idade: 28,
   profissao: 'Designer',
   possuiFaculdade: true,
 }

 pessoa.nome; // 'André'
 pessoa.possuiFaculdade; //true

 //propriedades e métodos consistem em nome (chave) e valor

//Métodos

/**
 * é uma propriedade que possui uma função no local de seu valor
 */

 var quadrado = {
   lados: 4,
   area: function(lado) {
     return lado * lado
   },
   perimetro: function(lado) {
     return this.lados * lado
   }
 }

 console.log(quadrado.area(5));
 console.log(quadrado.perimetro(5));

 //ou ////////////////////////

 
 var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado
  },
  perimetro(lado) {
    return this.lados * lado
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Organizar o código

//** Objetos servem para organizar o código em pequenas partes reutilizaveis */

// Criar um objeto
//** Um objeto é criado utilizando as chaves{} */

//Dot Notation Get
//**Acesse propriedades utilizando ponto */


var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroudColor: '#84E',
  metadeHeight() {
    return height / 2;
  },
}

menu.backgroudColor = '#84B';
menu.color = 'Blue';
menu.esconder = function() {
  console.log('esconde');
}
var bg = menu.backgroudColor;

// Adicionar propriedades e métodos:
//**Basta adicionar um novo nome definir o valor */

// var menu = {
//   width: 800,
// }
// menu.height = 50;
// MediaElementAudioSourceNode.position = 'fixed';


// Protótipo e herança
/**
 * Um objeto pode criar outro
 */

