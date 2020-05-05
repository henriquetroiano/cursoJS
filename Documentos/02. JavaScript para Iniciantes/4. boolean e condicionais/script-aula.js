//booleanos

var possuigraduacao = true;
var possuidoutorado = true;

if(possuigraduacao) {
  console.log('é verdadeiro');
  var x = 10;
} else if(possuidoutorado){
  console.log ('É vdd tbm');
} else {
  console.log('Não possui nada');
}

//truthy and falsy - existem valores que retornam true ou false quando verificados em uma expressão booleana.

//falsy
if(false);
if(0);
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``

//truthy
if(true);
if(1);
if(' ');
if('andre');
if(-5);
if({});

//operador lógico de negacao - se colocar 2 !! serve para verificar se o valor é vdd ou falso, converter string p/ boolean

if(!possuidoutorado) {
  console.log('não possui');
}

// operadores de comparacao
10 > 5;
5 > 10;
20 < 10;
10 <= 10;
10 >= 10;

var x = 10;

x == 10;

console.log(x === 10);

// && comparador entre expressoes - o primeiro valor falso que ele encontrar, ele vai retornan, se ele nao encontrar nenhum valor falso ele retorna o ultimo verdadeiro.

true && true; // retorna o ultimo verdadeiro
true && false; // retorna false
false && true; // retorna false
'Gato' && 'Cão'; // retorna o último vdd, 'Cão' pois ambos sao vdd
(5 - 5) && (5 + 5); // 5-5 é 0, falso, hjá para tudo por ai
'Gato' && false; // reotrna falso
(5 >= 5) && (3 < 6); // true

/// na prática

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
var condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//operador lógico OU || - sempre retorna o 1o valor verdadeiro

true || true; // retorna true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); // 

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);


// operador switch - com ele voce pode verificar se uma variavel é igual a diferentes valores utilizando o case. Caso seja igual, você pode fazer algo e utilizar Break; para parar. Caso nenhuma condição seja verdadeira o valor default será aplicado.

var corFavorita = 'Vermelho';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Amarelo':
    console.log('Olhe para o Sol');
    break;
  case 'Verde':
      console.log('Olhe para a Floresta');
      break;
  default:
    console.log('Feche os Olhos');
}

