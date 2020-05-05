//qual o resultado da seguinte expressao?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

//crie 02 expressões que retornem NaN;
var NaN1 = NaN / 2;
console.log(NaN1);

var NaN2 = 'arroz' / 2;
console.log(NaN2);

//Somar a string '200' com o número 50 e me retornan 250
var D1 = '200';
var D2 = 50;

console.log(+D1 + D2);

//Incremente o número 5 e retorne o seu valor incrementado
var N5 = 5;
var incrementar = N5++
var incrementar = N5;
console.log(incrementar);

//ou

var N = 5;
console.log(N++);
console.log(N);

//como dividir o peso por 2?
var número = '80';
var unidade = 'kg';
var peso = número + unidade; // 80kg
var pesoPorDois = peso / 2; //NaN

var pesoPorDoisCorreto = número / 2;
console.log(`${pesoPorDoisCorreto} ${unidade}`)