var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


var numero = 20;
var numero2 = 10;

numero **= numero2;
console.log(numero);


//Operadores Ternários

var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber 
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? true : false; // já retorna valores booleanos, só precisa declarar se quiser personalizar o true e false
console.log(podeBeber);

//if abreviado

var possuiFaculdade = false;

if(possuiFaculdade)
  console.log('Sim possui');
else 
  console.log('Não possui');

  










// var numero = 20;
// var numero2 = 10;

// numero += numero2; // numero = numero + numero2
// console.log(numero);
// console.log(numero2);

// var idade = 20;
// var naoPossuiDiabetes = false;

// var podeBeber;
// podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

// console.log(podeBeber)

// var possuiFaculdade = false;
// if(possuiFaculdade)
//   console.log('Sim possui');
// else
//   console.log('Não possui')