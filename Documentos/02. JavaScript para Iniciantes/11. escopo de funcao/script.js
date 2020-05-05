// por qual motivo o codigo abaixo retorna com erros?

{
  var cor = 'preto';
  const marca = 'fiat';
  let portas = 4;
}
// console.log(cor, marca, portas); // deve ter a variavel nos parenteses; marca e portas não podem ser lidos fora do escopo

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}



function dividirporDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirporDois(4));

// o que fazer para o total me retornar 500?

var numero = 50

for (let numero = 0; numero <= 10; numero++) {
  console.log(numero);
}
const total = 10 * numero
console.log(total);