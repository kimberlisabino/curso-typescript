"use strict";
class Gato {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`${this.nome} comeu ${tipoComida}`);
    }
}
const gato = new Gato('Totó', 10, true);
console.log(gato);
gato.comer('Ração');
