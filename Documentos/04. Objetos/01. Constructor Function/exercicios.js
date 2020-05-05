// Transforme o objeto abaixo em uma Constructor Function

function Pessoa (nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
  console.log(nome + ' andou');
  }
 }


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const Joao = new Pessoa('Joao', 30);
const Maria = new Pessoa('Maria', 18);
const Everton = new Pessoa('Everton', 45);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(element) {
  const Selecionatudo = document.querySelectorAll(element);
  this.elementos = Selecionatudo;
  
  this.addClass = function (classe) {
    Selecionatudo.forEach((element) => {
      element.classList.add(classe)
    })
  }
  this.removeClass = function (classe) {
    Selecionatudo.forEach((element) => {
      element.classList.remove(classe)
    })
  }
}  


const Selecionartodos = new Dom('li');
const Adicionarclasse = new Dom('li');
const Removerclasse = new Dom('li');




