"use strict";
// Exemplo 1 - Tipo Any
const a = 28;
const b = ['Kim'];
const result = a + b;
console.log(result); // ele junta as informações como se fosse uma string (28Kim)
// Exemplo 2 - Quanto o tipo Any é inferindo implicitamente
let frase;
frase = 'Oi, pessoal!';
console.log(frase);
// Exemplo 3 - Quando devemos usar o tipo any?
const formulario = {
    nome: 'Kimberli',
    sobrenome: 'Sabino',
    idade: 28,
};
console.log(formulario);
