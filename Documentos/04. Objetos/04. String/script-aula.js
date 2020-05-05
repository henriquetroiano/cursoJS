// const comida = 'Pizza';

// const agua = new String('agua');

// const frase = 'A melhor comida';

// console.log(agua.length)

// console.log(frase[frase.length - 1]) //  se nao existir dá undefined
// console.log(frase.charAt(frase.length - 1)) // se não existir retorna um carater em branco, como se fosse um espaço

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase.concat(linguagem, "!!") // concat é igual a +

const fruta = 'Banana';
const listaFrutas = 'Melancia, banana, Laranja';

console.log(fruta.includes(listaFrutas)) // procura dentro da string e retorna boolean
console.log(listaFrutas.includes(fruta)) //

console.log(fruta.startsWith('Ba')) // começa com..?? (case sensitive)
console.log(fruta.endsWith('na')) // termina com..?? (case sensitive)

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep - começa no idnex 0 e rtorna os 3 proximos
transacao2.slice(0, 3); // Dep - começa no idnex 0 e rtorna os 3 proximos
transacao3.slice(0, 3); // Tax - começa no idnex 0 e rtorna os 3 proximos
transacao3.slice(0, -3); // Tax - corta os 3 ultimos caracteres

transacao1.slice(12); // cliente - retorna  costa os primeiros 12 caracteres
transacao1.slice(-4); // ente - retorna os 5 ultimos caracteres
transacao1.slice(3, 6); // ósi - retorna do terceiro ao sexto


const linguage = 'JavaScript'; // igual ao slice mas não funciona com números negativos
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript
 
const instrumento = 'Guitarra'; // aonde está o caracter ou grupo de caracteres
instrumento.indexOf('r'); // 5 - retorna primeiro
instrumento.lastIndexOf('r'); // 6 - retorna ultimo
instrumento.indexOf('ta'); // 3

const preco = 'R$ 99,00' // padStart e padEnd  insere caracteres em branco ou predefinidos

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
 console.log(item.padStart(10, '.'));
}) // serve  para alinhar itens preenchendo com espaços ou qualquer algo definido, alinhando os item com o TOTAL de caracteres desejado.

const frase2 = 'Ta';
frase2.repeat(5); // TaTaTaTaTa - Repete a string quantas vezes quiser

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', '); // primeiro item é o que procurar, segundo item é com o que substituir.


let preco2 = 'R$ 1200,43';
preco2 = preco2.replace(',', '.'); // 'R$ 1200.43'

const arrayLista = listaItens.split(', ') // retorna array de uma string de acordo com o critério
console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino')

const valor = ' R$ 23.00 ' // remove espaços antes ou depois da string. o que esta no meio, ele mantém.
valor.trim(); // 'R$ 23.00' - remove do comeco e do final
valor.trimStart(); // 'R$ 23.00 ' - remove espaco do inicio
valor.trimEnd(); // ' R$ 23.00' - remove espaco do fim














