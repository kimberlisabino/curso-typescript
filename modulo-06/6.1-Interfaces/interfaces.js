"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirNome(pessoa) {
    return `
    Nome...: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade...: ${pessoa.idade}
    `;
}
const kimberli = {
    nome: 'Kimberli',
    sobrenome: 'Sabino',
    idade: 28,
};
console.log(exibirNome(kimberli));
const livro = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis'
};
console.log(livro);
const carro = {
    modelo: 'Fusca',
    ano: 1969,
};
console.log(carro);
class Gato {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`${this.nome} comeu ${tipoComida}`);
    }
}
const gato = new Gato('Totó', 10, true);
console.log(gato);
gato.comer('Ração');
