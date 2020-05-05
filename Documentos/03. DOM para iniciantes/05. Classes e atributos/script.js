// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('Ativo')
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove('Ativo')
})
itensMenu[0].classList.add('ativo');


// Verifique se as imagens possuem o atributo alt

const verifAttrib = document.querySelectorAll('img');
verifAttrib.forEach((img, index) => {
  console.log(`A imagem ${index} têm atributo Alt? => ${img.hasAttribute('alt')}`)});


//  Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');

link.setAttribute('href', 'http://google.com.br');
console.log(link)
