// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa


function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomecompleto = function() {
  return this.nome + ' ' + this.sobrenome + ' ' + this.idade;
};

const Joao = new Pessoas('Joao', 'Silva', 20);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

const metodosNodelist = NodeList.prototype;
const metodosHTML = HTMLCollection.prototype;
const metodosDocument = Document.prototype;
// OU
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
// objeto.constructor.name
li; //HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click();// undefined - não existe constructor de undefined ou null, o que importa é o que retorna e não o que vai fazer.



// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // li.hidden.constructor.name.constructor.name - string

