"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01
class Funcionario {
    construsctor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(1996, 7, 10));
funcionario.dataNascimento = new Date(1996, 7, 10);
// Exemplo 02
class Funcionari01 {
    constructor(dataNacimento) {
        this.dataNacimento = dataNacimento;
        this.dataNacimento = dataNacimento;
    }
}
// Exemplo 03
class Funcionario03 {
    constructor(nome, codigo) {
        this.codigoFuncionario = codigo;
        this.nome = nome;
    }
}
const func = new Funcionario03('Kimberli Sabino', 458596);
func.nome = 'Kimberli Sabino Ariotti';
func.codigoFuncionario = 115588; // não pode reatribuir
const funcionario01 = {
    codigoFucnioanrio: 4521,
    nomeEmpregado: 'Kim',
};
funcionario01.codigoFucnioanrio = 7896;
funcionario01.nomeEmpregado = 'Kimberli';
const funcionario02 = {
    codigoFucnioanrio: 4521,
    nomeEmpregado: 'Kim',
};
funcionario02.codigoFucnioanrio = 7896;
funcionario02.nomeEmpregado = 'Kimberli';
