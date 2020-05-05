///////////      EXERCICIOS

console.log('////////// EXERCÍCIO 01');
// Utilizando o forEach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
  descricao: 'Taxa do Pão',
  valor: 'R$ 39',
  },
  {
  descricao: 'Taxa do Mercado',
  valor: 'R$ 129',
  },
  {
  descricao: 'Recebimento de Cliente',
  valor: 'R$ 99',
  },
  {
  descricao: 'Taxa do Banco',
  valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento do Cliente',
    valor: 'R$ 49',
  },
];

let valorTaxa = parseInt(0);
let valorRecebimento = parseInt(0);


transacoes.forEach((item, index) => {
if(transacoes[index].descricao.startsWith('Taxa') === true) {
  valorTaxa = valorTaxa + parseInt(transacoes[index].valor.replace('R$ ', ''))
} else if (transacoes[index].descricao.startsWith('Recebimento') === true){
  valorRecebimento = valorRecebimento + parseInt(transacoes[index].valor.replace('R$ ', ''))
} else {
  console.log('fudeu')
}
})
console.log(`O valor das Taxas somadas é de R$ ${valorTaxa}`)
console.log(`O valor dos Recebimentos somados é de R$ ${valorRecebimento}`)

//////////////////////// -- Jeito do curso :: ☼☼

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
  const numerolimpo = +item.valor.replace('R$ ', '')
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numerolimpo
  } else {
    recebimentoTotal += numerolimpo;
  }
})
console.log(taxaTotal)
console.log(recebimentoTotal)



console.log('////////// EXERCÍCIO 02');

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const splitTransportes = transportes.split(';')
console.log(splitTransportes);


console.log('////////// EXERCÍCIO 03');

// Substitua todos os span's por a's

let html = `<ul>
 <li><span>Sobre</span></li>
 <li><span>Produtos</span></li>
 <li><span>Contato</span></li>
 </ul>`;

// const splitHTML = html.split('span');
// const joinHTML = splitHTML.join('a');
// console.log(joinHTML);

//////////////////////// -- Jeito do curso :: ☼☼

html = html.split('span').join('a')
console.log(html)


console.log('////////// EXERCÍCIO 04');

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(`Utilizando o Length junto ao charAt => ${frase.charAt(frase.length - 1)}`);


console.log('////////// EXERCÍCIO 05');


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totaldeTaxas = 0;

transacoes2.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4)
  if (item === 'taxa') {
    totaldeTaxas++
  }
})
console.log(totaldeTaxas)









