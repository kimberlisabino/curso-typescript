"use strict";
class Pessoa extends Estudante03 {
    constructor(codigoEstudante, nomeEstudante, curso) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }
    retornarDadosAluno() {
        return `Código do Aluno...: ${this.codigoEstudante}.
        Nome do Estudante...: ${this.nomeEstudante}.
        Curso do Estudante...: ${this.curso}`;
    }
}
const estudante03 = new Pessoa(122366, 'Kimberli Sabino', 'Letras');
console.log(estudante03.retornarDadosAluno());
