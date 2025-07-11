"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01 - Functions (Named function)
function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarNumeros(3, 5));
// Exemplo 02 - Função Anônima (Function Expression)
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá, Kim'));
// Exemplo 03 - (Arrow Function Expression)
const saudar03 = (mensagem) => {
    return mensagem;
};
console.log(saudar03('Olá, Kimberli'));
// Exemplo 04 - (Function constructor) - passa os parâmetros e o corpo da função como strings.
const saudar04 = new Function('mensagem', 'return "Fala " + mensagem');
// - O primeiro argumento é o nome do parâmetro: 'mensagem'.
// - O segundo argumento é o corpo da função: 'return "Fala " + mensagem'.
console.log(saudar04('Galera'));
