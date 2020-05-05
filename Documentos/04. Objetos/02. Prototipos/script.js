function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'abracou';
  }
}

var obj = {
  nome: 'Andre',
  idade: 33,
}

obj.teste = 'Teste';

// Com prototype é a mesma coisa

Pessoa.prototype.andar = function() {
  return this.nome + ' Pessoa andou';
}

const Andre = new Pessoa('Andre', 30);

// console.log(Pessoa.prototype) // retorna as propriedades da função
// console.log(Andre.prototype) // undefined, prototype só existe em funções

const pais = "Brasil";
const cidade = new String('Rio');

const listaAnimais = ['cachorro', 'gato', 'cavalo'];

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  }
}




