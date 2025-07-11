"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01 - Propriedades Estáticas
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        // nome da classe + nome da propriedade
        Funcionario.contratacoes++;
    }
}
Funcionario.contratacoes = 0;
const funcionario01 = new Funcionario('Kimberli', 'Sabino', 'Developer');
const funcionario02 = new Funcionario('Christian', 'Lemos', 'Developer');
console.log(Funcionario.contratacoes);
// Exemplo 02 - Métodos Estáticos
class Funcionario01 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        // nome da classe + nome da propriedade
        Funcionario01.contratacoes++;
    }
    static retornarContratacoes() {
        return Funcionario01.contratacoes;
    }
}
Funcionario01.contratacoes = 0;
const funcionario03 = new Funcionario01('Kimberli', 'Sabino', 'Developer');
const funcionario04 = new Funcionario01('Christian', 'Lemos', 'Developer');
// pra acessar o método - nome da Classe + nome do método
console.log(Funcionario01.retornarContratacoes());
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
    exibirInformação() {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}
Cachorro.QTD_CACHORRO_VENDIDO = 0;
const cachorro = new Cachorro('Teemo', 10, ['Yorkshire']);
const cachorro2 = new Cachorro('Farofa', 6, ['Poodle']);
