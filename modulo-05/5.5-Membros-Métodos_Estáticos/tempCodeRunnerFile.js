"use strict";
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
    exibirInformação() {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}
Cachorro.QTD_CACHORRO_VENDIDO = 0;
const cachorro = new Cachorro('Teemo', 10, ['Yorkshire']);
const cachorro2 = new Cachorro('Farofa', 6, ['Poodle']);
