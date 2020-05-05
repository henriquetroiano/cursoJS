console.log(Number.isNaN('sds')) // checar se é NaN (só serve pra isso)
console.log(Number.isInteger('sds')) // checar se é inteiro ou quebrado

console.log(parseFloat('321116536,6464')) // transforma string em numero
console.log(parseInt('100.27 reais')) // retorna numero integral de string

const preco = 2.99;
preco.toFixed(); // arredonda pra numero inteiro, no caso aqui 3

const carro = 1000.455;
preco.toFixed(2); // arredonda para 2 casas decimais 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // arredonda pra numero inteiro, no caso aqui  1499

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // transforma para moeda que quiser

console.log(valor)





