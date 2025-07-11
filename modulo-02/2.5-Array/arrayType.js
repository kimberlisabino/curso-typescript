"use strict";
// Exemplo 1 - Uso de colchetes:
let frutas = ['abacaxi', 'laranja', 'melancia', 'morango', 'manga'];
console.log(frutas[2]);
// Exemplo 2 - Array Object (Objeto Array)
let frutasObject = ['abacaxi', 'laranja', 'melancia', 'morango', 'manga'];
console.log(frutas[3]);
// Exemplo 3 - Adicionando mais strings com método push
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Madarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
// Exemplo 4 - Identificar tamanho do array - método 'lenght'
let idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);
// Exemplo 5 - Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// Exemplo 6 - Exemplo de Array com laço de iteração (lista o que tem no array)
let linguagensArray = new Array('Javascript', 'Java', 'Python', 'Golang');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
