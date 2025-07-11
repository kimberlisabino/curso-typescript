"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01 
function somarNumeros(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
console.log(somarNumeros(30, 50));
console.log(somarNumeros(70, 30, 50, 30, 20));
// Exemplo 02
function listarFrutas(frase, ...frutas) {
    return frase + ' ' + frutas.join(', ');
}
console.log(listarFrutas('Kim, você precisa ir na feira e comprar...:', 'Banana', 'Maçã', 'Laranja', 'Morango'));
// Exemplo 03
class Produtos {
    exibirProdutor(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoInformatica = new Produtos();
console.log('Todos os produtos do deparatamento de informática disponíveis no estoque...: ');
departamentoInformatica.exibirProdutor('Mouse', 'Notebook', 'USB', 'Monitor', 'Teclado', 'Webcam');
