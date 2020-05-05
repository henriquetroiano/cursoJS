// window.alert('123');


const href = document.location.href;
console.log(href);

if(href === 'http://127.0.0.1:5500/index.html') {
  console.log('É Igual');
};

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function teste () {
  console.log('Clicou em:', h1Selecionado.innerText)
}

h1Selecionado.addEventListener('click', teste);

