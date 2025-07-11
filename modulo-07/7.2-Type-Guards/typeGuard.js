"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirTipo(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    if (typeof a == 'string' && typeof b == 'string') {
        return a.concat(b);
    }
    throw new Error('Argumentos inválidos! Ambos os argumentos devem ser numéricos ou string.');
}
console.log(exibirTipo('Kim', '15')); // Kim15
console.log(exibirTipo(5, 5)); // 10
console.log(exibirTipo('Sabino', 5)); // Erro
// Exemplo 02 - Type Guards: instanceof
class Carro {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
function detalhesVeiculo(veiculo) {
    if (veiculo instanceof Carro) {
        return `O nome do carro é: ${veiculo.nome} e a marca é ${veiculo.marca}`;
    }
    else if (veiculo instanceof Moto) {
        return `O nome da moto é: ${veiculo.nome} e o ano é ${veiculo.ano}`;
    }
}
const carro = new Carro('Gol', 'Volkswagen');
console.log(detalhesVeiculo(carro));
const moto = new Moto('Biz', 2005);
console.log(detalhesVeiculo(moto));
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corPena) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}
function nadar(grupo) {
    console.log(`O ${grupo} está nadando...`);
}
function voar(grupo) {
    console.log(`O ${grupo} está voando...`);
}
function mover(animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo);
    }
    else if ('corPena' in animal) {
        voar(animal.grupo);
    }
}
mover(new Peixe('Peixe', 'Azul'));
mover(new Passaro('Pássaro', 'Vermelho'));
