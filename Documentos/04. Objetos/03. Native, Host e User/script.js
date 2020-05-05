// Liste 5 objetos nativos
String
Number
Object
Math
Array
Function
typeof


// Liste 5 objetos do browser
Window
Document
Screen
Location
Navigator
history
HTMLCollection
NodeList


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if ( typeof document.webkitHidden !== "undefined") {
  console.log('existe')
} else {
  console.log('não existe')
}

if ( typeof document.webkitVisibilityState !== "undefined") {
  console.log('existe')
} else {
  console.log('não existe')
}

