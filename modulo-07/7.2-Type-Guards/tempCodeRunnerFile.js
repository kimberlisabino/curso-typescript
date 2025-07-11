"use strict";
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corPena) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}
function nadar(grupo) {
    console.log(`O ${grupo} está nadando...`);
}
function voar(grupo) {
    console.log(`O ${grupo} está voando...`);
}
function mover(animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo);
    }
    else if ('corPena' in animal) {
        voar(animal.grupo);
    }
}
mover(new Peixe('Peixe', 'Azul'));
mover(new Passaro('Pássaro', 'Vermelho'));
