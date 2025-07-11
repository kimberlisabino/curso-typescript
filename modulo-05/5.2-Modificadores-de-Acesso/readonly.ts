export {};

// Exemplo 01
class Funcionario {
    readonly dataNascimento: Date;
    construsctor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario(new Date(1996, 07, 10));
funcionario.dataNascimento = new Date(1996, 07, 10)

// Exemplo 02
class Funcionari01 {
    constructor(readonly dataNacimento: Date) {
        this.dataNacimento = dataNacimento;
    }
}

// Exemplo 03
class Funcionario03 {
    nome: string; 
    readonly codigoFuncionario: number;

    constructor(nome: string, codigo: number) {
        this.codigoFuncionario = codigo;
        this.nome = nome;
    }
}

const func = new Funcionario03('Kimberli Sabino', 458596);
func.nome = 'Kimberli Sabino Ariotti';
func.codigoFuncionario = 115588; // não pode reatribuir

// Exemplo 04 - Interface
interface IFuncionario {
    codigoFucnioanrio: number;
    nomeEmpregado: string;
}

const funcionario01: Readonly<IFuncionario> = {
    codigoFucnioanrio: 4521,
    nomeEmpregado: 'Kim',
}

funcionario01.codigoFucnioanrio = 7896;
funcionario01.nomeEmpregado = 'Kimberli';

const funcionario02: IFuncionario = {
    codigoFucnioanrio: 4521,
    nomeEmpregado: 'Kim',
}

funcionario02.codigoFucnioanrio = 7896;
funcionario02.nomeEmpregado = 'Kimberli';