"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01 - Get
class Quadrado {
    constructor() {
        this._largura = 6;
        this._altura = 12;
    }
    get calcularQuadraro() {
        return this._altura * this._largura;
    }
}
console.log(new Quadrado().calcularQuadraro);
// Exemplo 02 - Set
class Pessoa {
    retornarNomePessoa(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Kimberli Sabino');
console.log('Meu nome é...:', pessoa.nome);
// Exemplo 03 - Get (mais denso)
class Estudante {
    constructor() {
        this.nome = 'Kimberli Sabino';
    }
    get nomeEstudante() {
        return this.nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);
// Exemplo 04 - Get/Set (mais denso)
class Estudante01 {
    constructor(nomeEstudante, semestreEstudante, cursoEstudante) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;
    }
    get cursos() {
        return this.curso;
    }
    set cursos(setCurso) {
        this.curso = setCurso;
    }
}
const estudante01 = new Estudante01('Kimberli Sabino', 5, 'Sistemas da Informação');
console.log(estudante01);
// Setter call
estudante01.curso = 'Ciências da Computação';
// Getter call
console.log('Curso atualizado...', estudante01.cursos);
