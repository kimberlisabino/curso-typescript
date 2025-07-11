"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01 - Classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa('Kimberli', 'Sabino');
console.log(pessoa.nomeCompleto());
// Exemplo 02 - Classes (sem contructor)
class Estudante {
}
// Criar um objeto ou a instância
const estudante = new Estudante();
// Inicializar o objeto:
estudante.codigoEstudante = 8569;
estudante.nomeEstudante = 'Teemo Sabino';
// Acessar os campos:
console.log('Código do Estudante...: ' + estudante.codigoEstudante);
console.log('Nome do Estudante...: ' + estudante.nomeEstudante);
// Exemplo 03 - Classes (com contructor)
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
console.log('Lendo o atributo Código do Estudante...: ' + estudante1.codigoEstudante);
console.log('Lendo o atributo Nome do Estudante...: ' + estudante1.nomeEstudante);
