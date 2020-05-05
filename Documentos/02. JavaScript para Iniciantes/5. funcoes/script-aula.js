function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(20));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total.toFixed(1));

// Parâmetros e argumentos
/**
 * Ao criar uma funcao voce pode definir parametros.
 * Ao executar uma funcao você pode passar argumentos.
 */

// peso e altura são parametros
function imc1(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc1(80, 1.80).toFixed(1)); // 80 e 1.80 são argumentos
console.log(imc1(60, 1.70).toFixed(1)); // 60 e 1.70 são argumentos

//Parênteses executa a função

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Gosta de Floresta';
  } else {
    return 'Eu não gosto de cores'
  }
}



// argumentos podem ser funções - Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
/**
 * A função possui dois argumentos
 * primeiro é a string Click
 * Segundo é uma função anônima.
 * 
 * Funções anônimas são aquelas emq ue o nome da função não é definido, escritas como function() {} ou () => {}
 * 
 */

addEventListener('click', function() {
  console.log('Clicou');
}); 

// A função pode ou não retornar um valor.  Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor return ou não.

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined

// Valores retornados - uma funcao pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe sua Idade';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}


//Escopo - variáveis e funções definidas dentro de um block {} não são visíveis fora dele.

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar); // erro, totalPaises não definido, pois está dentro do bloco.

// Escopo léxico - funções conseguem acessar variáveis que foram criadas no contexto PAI.

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco =  'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}, `;
  }
  return outrosDados();
}

dados(); // Retorna andré, 29, Rio de Janeiro, Designer

outrosDados(); // Retorna um erro

//Hoisting - antes de executar uma função, o JS 'move' todas as funcoes declaradas para a memoria.

imc(80, 1.80); //imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

