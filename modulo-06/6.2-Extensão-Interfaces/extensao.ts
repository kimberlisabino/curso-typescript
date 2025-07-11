export {};

// Exemplo 01 - Interfaces com extends
interface Animal1 {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro1 extends Animal1 {
    raca: string;
}

const cachorro: Cachorro1 = {
    nome: 'Teemo',
    idade: 10,
    porte: 'Pequeno',
    raca: 'Yorkshire',
}

console.log(cachorro);

// Exemplo 02 - Extensão de Múltiplas Interfaces
interface Cachorro {
    nome: string;
}

interface Gato {
    nome: string;
}

interface Animal extends Cachorro, Gato {
    idade: number;
}

const animal: Animal = {
    nome: 'Farofa',
    idade: 5,
}

console.log(animal);

// Exemplo 03 - Uso do Omit
interface Funcionario {
    id: number; // ou - id: number | string
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id'> { // para mudar o escopo de uma propriedade
    id: string; // overwrite de number pra string
    linguagemProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
    id: 'js-123',
    nome: 'Kimberli Sabino',
    salario: 1000,
    linguagemProgramacao: 'Javascript',
}

console.log(desenvolvedor);