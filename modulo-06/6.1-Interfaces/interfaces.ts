export {};


// Exemplo 01 - Interface Simples
interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function exibirNome(pessoa: Pessoa) {
    return `
    Nome...: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade...: ${pessoa.idade}
    `
}

const kimberli = {
    nome: 'Kimberli',
    sobrenome: 'Sabino',
    idade: 28,
}

console.log(exibirNome(kimberli));

// Exemplo 02 - Interface com Propriedades Opcionais
interface Livro {
    titulo: string;
    autor: string;
    paginas?: number; // opcional
}

const livro: Livro = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis'
}

console.log(livro);

// Exemplo 03 - Interface com Propriedades de Somente Leitura e Opcionais
interface Carro {
    readonly modelo: string; // propriedade que vai ser modificada apenas quando o objeto for criado pela primeira vez
    ano: number;
    valor?: number;
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969,
}

console.log(carro);

// Exemplo 04 - Interface com implements Class
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string): void {
        console.log(`${this.nome} comeu ${tipoComida}`);
    }
}

const gato = new Gato('Totó', 10, true);
console.log(gato);
gato.comer('Ração'); 

// Exemplo 05 - Interface vs Alias Type
interface Pessoa2 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa3 = {
    nome: string;
    sobrenome: string;
    idade: number;
}


