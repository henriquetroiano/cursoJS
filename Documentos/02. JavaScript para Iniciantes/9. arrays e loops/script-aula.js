

// var ultimItemRemove = videoGames.pop();

// videoGames.push('3DS');

for (var numero = 0; numero <= 4; numero++) {
    console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5
};

var videoGames = ['Switch', 'Ps4', 'Xbox', '3DS'];

for (var item = 0; item < videoGames.length; item++)  {
  console.log(videoGames[item]);
  if(videoGames[item] === 'Ps4') {
    break;
  }
}

var frutas = ['banana', 'pera', 'maca', 'abacaxi', 'uva'];

frutas.forEach(function(fruta, index) {
  frutas.pop()
  console.log(fruta, index)
})

