//crie uma array com os anos que o brasil ganhou a copa
//interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem: o brasil ganhou a copa 

var copasGanhas = [1959, 1962, 1970, 1994, 2002];

for(var copa = 0; copa <= copasGanhas.length; copa++) {
  console.log(`O Brasil ganhou a copa de ${copasGanhas[copa]}` )
  };


  //interaja com as frutas abaixo e pare o loop ao chegar em pera
  var frutas = ['banana', 'maca', 'pera', 'uva', 'melancia'];

  for(var fruta = 0; fruta < frutas.length; fruta++) {
    if( frutas[fruta] === 'pera') {
      console.log(`A Fruta é ${frutas[fruta]}`);
      break
  }}

  //coloque a ultima fruta do array acima em uma variavel s/ remove-la do array

  var colocarfruta = frutas[frutas.lenght - 1];
  
  
