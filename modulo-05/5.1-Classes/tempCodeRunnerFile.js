"use strict";
class Estudante1 {
    // Definir o construtor
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    // Criar método
    listarEstudante() {
        console.log('Código do Estudante...: ' + this.codigoEstudante);
        console.log('Nome do Estudante...: ' + this.nomeEstudante);
    }
}
// Acessar campos:
const estudante1 = new Estudante1(5826, 'Kimberli');
console.log('Lendo o atributo do Estudante...: ' + estudante1.codigoEstudante);
console.log('Lendo o atributo do Estudante...: ' + estudante1.nomeEstudante);
