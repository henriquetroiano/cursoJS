// window.alert('123');

const href = window.location.href;
console.log(href)
if( href === "http://127.0.0.1:5500/index.html") {
  console.log('é igual')
}

const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList;


function callbackh1() {
  console.log('Clicou em ', h1Selecionado.innerText);

}

h1Selecionado.addEventListener('click' , callbackh1);

// h1Selecionado.addEventListener('click', function() {
//   console.log('clicou em ', h1Selecionado.innerText);
// })




// // window.alert('Isso mesmo');

// const href = window.location.href;

// console.log(href);

// if(href === 'http://127.0.0.1:5500/o-que-e-o-doms/') {
//   console.log('É igual');
// }

// const h1Selecionado = document.querySelector('h1');
// const h1Classes = h1Selecionado.classList;

// function teste() {
//   console.log('Clicou em ', h1Selecionado.innerText);
// }

// h1Selecionado.addEventListener('click', teste);