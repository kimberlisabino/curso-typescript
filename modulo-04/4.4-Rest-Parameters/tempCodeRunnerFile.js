"use strict";
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
