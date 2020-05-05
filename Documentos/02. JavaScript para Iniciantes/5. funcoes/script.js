// //////////////EXERCÍCIOS HACKER///////////////////////////

// Crie uma função para verificar se um valor é Truthy
// var verificarvalor = 'arroz';
// console.log(!!verificarvalor)
function verificarvalores(dado) {
  return !!dado;
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroquadrado(lado) {
  return lado * 4
}
// console.log(perimetroquadrado(2));



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
// function fullName(nome, sobrenome) {
//   console.log(`Meu nome completo é ${nome} ${sobrenome}`);
//  }
// fullName('Henrique', 'Troiano');
function fullName(nome, sobrenome) {
    return `Meu nome completo é ${nome} ${sobrenome}`;
   }




// Crie uma função que verifica se um número é par
// function verificarsepar(numero) {
//    if((numero / 2) == (numero / 2).toFixed(0)) {
//     console.log('Número Par');
//   } else {
//     console.log('Número Ímpar')
//   }
// }
function isEven(number) {
  var modulo = number % 2;
  if(modulo === 0) {
    return true
  } else {
    return false
  }
;}




// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// const verificarTipoDado = 'Arroz';
// console.log(typeof verificarTipoDado);
function tipoDeDado(dado) {
  return typeof dado
}




/**
 * addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no Console o seu nome completo quando o evento 'click' ocorrer. */

 addEventListener('click', function() {
  console.log('asd????'); 
   })



// Corrija o erro abaixo
// Corrija o erro abaixo

var totalPaises = 193;

 function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
 
  function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
  }

  precisoVisitar(20);
  jaVisitei(20);