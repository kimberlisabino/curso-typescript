export {};

// Exemplo 01 - Default Parameters
function descontoCompra(preco: number, desconto = 0.08) {
    return preco *(1 - desconto);
}

console.log(descontoCompra(100));

// Exemplo 02
function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!') {
    return saudar + ' ' + mensagem + '!';
}

console.log(exibirMensagem('Javascript Developers'))

// Exemplo 03
function exibirNome(nome: string, sobrenome = 'Sabino') {
    return nome + ' ' + sobrenome;
}

const resultado1 = exibirNome('Kimberli');
const resultado2 = exibirNome('Kimberli', undefined);
// const resultado3 = exibirNome('Kimberli', 'Sabino', 'Senhora');
const resultado04 = exibirNome('Kimberli', 'Ariotti');

console.log(resultado1);
console.log(resultado2);
// console.log(resultado3);
console.log(resultado04);
