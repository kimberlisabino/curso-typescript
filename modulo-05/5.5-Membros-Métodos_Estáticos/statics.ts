export {};

// Exemplo 01 - Propriedades Estáticas
class Funcionario {
    static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ) {
        // nome da classe + nome da propriedade
        Funcionario.contratacoes++;
    }
}

const funcionario01 = new Funcionario('Kimberli', 'Sabino', 'Developer');
const funcionario02 = new Funcionario('Christian', 'Lemos', 'Developer');
console.log(Funcionario.contratacoes);


// Exemplo 02 - Métodos Estáticos
class Funcionario01 {
    private static contratacoes = 0;

        constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ) {
        // nome da classe + nome da propriedade
        Funcionario01.contratacoes++;
    }

    public static retornarContratacoes() {
        return Funcionario01.contratacoes;
    }
}

const funcionario03 = new Funcionario01('Kimberli', 'Sabino', 'Developer');
const funcionario04 = new Funcionario01('Christian', 'Lemos', 'Developer');

// pra acessar o método - nome da Classe + nome do método
console.log(Funcionario01.retornarContratacoes());

// Exemplo 03 - Propriedades Estáticas
type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static QTD_CACHORRO_VENDIDO = 0;

    constructor(nome: string, idade: number, racas: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }

    public exibirInformação(): void {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`)
    }
}

const cachorro = new Cachorro('Teemo', 10, ['Yorkshire']);
const cachorro2 = new Cachorro('Farofa', 6, ['Poodle']);