export {};

// Exemplo 01 - public
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudante();
estudante.codigoEstudante = 201;
estudante.nomeEstudante = 'Kimberli Sabino';

console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);

// Exemplo 02 - private
class Estudante02 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }

    retornarDadosEstudante() {
        return `Código do Aluno...: ${this.codigoEstudante}.
        Nome do Estudante...: ${this.nomeEstudante}.
        Idade do Estudante...: ${this.idade};`
    }
}

const estudante02 = new Estudante02(452585, 'Kimberli Sabino', 28);
console.log(estudante02.retornarDadosEstudante()); // não dá pra acessar idade

// Exemplo 03 - protected
class Estudante03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudante03 {
    private curso: string;

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
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
console.log(estudante03.retornarDadosAluno);