"use strict";
function exibirNome(nome, sobrenome = 'Sabino') {
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
