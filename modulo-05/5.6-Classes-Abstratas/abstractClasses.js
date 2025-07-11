"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContracheque() {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}
// const funcionario = new Funcionario('Kimberli', 'Sabino'); 
// Não é possível criar uma instância de uma classe abstrata
class FuncionarioCLT extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome); // puxa propriedades privadas da classe pai
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const kimberli = new FuncionarioCLT('Kimberli', 'Sabino', 1500);
const joao = new FuncionarioPJ('João', 'Silva', 150, 160);
console.log(kimberli.emitirContracheque());
console.log(joao.emitirContracheque());
