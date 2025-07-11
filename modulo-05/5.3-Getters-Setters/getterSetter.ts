export {};

// Exemplo 01 - Get
class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadraro() {
        return this._altura * this._largura;
    }
}

console.log(new Quadrado().calcularQuadraro);

// Exemplo 02 - Set
class Pessoa {
    nome: string;

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Kimberli Sabino');
console.log('Meu nome é...:', pessoa.nome);

// Exemplo 03 - Get (mais denso)
class Estudante {
    private nome = 'Kimberli Sabino';
    private semestre: number;
    private curso: string;

    public get nomeEstudante() {
        return this.nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);


// Exemplo 04 - Get/Set (mais denso)
class Estudante01 {
    nome: string;
    semestre: number;
    curso: string;

    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;
    }

    public get cursos() {
        return this.curso;
    }

    public set cursos(setCurso: string) {
        this.curso = setCurso;
    }
}

const estudante01 = new Estudante01('Kimberli Sabino', 5, 'Sistemas da Informação');
console.log(estudante01);

// Setter call
estudante01.curso = 'Ciências da Computação';

// Getter call
console.log('Curso atualizado...', estudante01.cursos);
