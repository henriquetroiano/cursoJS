// Exercícios

// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 28;
var idadeParente = 23;

if(minhaIdade > idadeParente) {
  console.log('Minha idade é Maior');
} else {
  console.log('Minha Idade é Menor')
}

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 28;
var idadeParente = 23;

if(minhaIdade > idadeParente) {
  console.log('Minha idade é Maior');
} else if (minhaIdade < idadeParente){
  console.log('Minha Idade é Menor');
} else if (minhaIdade === idadeParente) {
  console.log('Idades Iguais');
} else {
  console.log('erro');
}

// Qual valor é retornado na seguinte expressão? -- 3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var Brasil = 207;
var China = 1340;
console.log(`Temos uma relação de 01 Brasileiro para cada ${(China / Brasil).toFixed(0)} Chineses`)
if (Brasil > China) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes');
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
 } else {
  console.log('Falso');
 }


 // O que irá aparecer no console?
 if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
 } else {
  console.log('Falso');
 }