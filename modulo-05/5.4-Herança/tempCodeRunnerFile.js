"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentarPessoa() {
        return `Meu nome é ${this.nome} ${this.sobrenome}.`;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, funcao) {
        super(nome, sobrenome); // para pegar as propriedades que são privadas em Pessoa
        this.funcao = funcao;
    }
    retornarNome02() {
        return super.apresentarPessoa() + `E sou ${this.funcao}`;
    }
}
const funcionario = new Funcionario('Kimberli', 'Sabino', 'Dev');
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarNome02());
