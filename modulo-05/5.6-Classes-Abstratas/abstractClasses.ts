export {};

// Exemplo 01
abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string) { }

    abstract retornarSalario(): number;

    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    emitirContracheque(): string {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}

// const funcionario = new Funcionario('Kimberli', 'Sabino'); 
// Não é possível criar uma instância de uma classe abstrata

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number) {
        super(nome, sobrenome); // puxa propriedades privadas da classe pai
    }

    retornarSalario(): number { // como público
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const kimberli = new FuncionarioCLT('Kimberli', 'Sabino', 1500);
const joao = new FuncionarioPJ('João', 'Silva', 150, 160);

console.log(kimberli.emitirContracheque());
console.log(joao.emitirContracheque());