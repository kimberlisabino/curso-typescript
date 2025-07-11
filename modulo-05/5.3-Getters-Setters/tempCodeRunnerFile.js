"use strict";
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
