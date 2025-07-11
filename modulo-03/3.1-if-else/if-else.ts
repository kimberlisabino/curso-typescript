export { };

// Exemplo 01 - Uso do if
const numeroMaximo = 100;
let contador = 100;

if (contador < numeroMaximo) {
    contador ++
}

console.log(contador);


// Exemplo 02 - Uso do if
const permissaoIdadeDirigir = 18;

if (permissaoIdadeDirigir >= 18) {
    console.log('Você está habilitado para dirigir!');
}

// Exemplo 03 - Uso do if-else
const permissaoIdadeDirigir01 = 18;

if (permissaoIdadeDirigir01 <= 17) {
    console.log('Você está habilitado para dirigir!');
} else {
    console.log('Você não está habilitado para dirigir!');
}


// Exemplo 04 - if ... else if
let desconto: number;
let itemContador = 14;

if (itemContador > 0 && itemContador <= 5) {
    desconto = 5;
} else if (itemContador > 5 && itemContador <= 10) {
    desconto = 15;
} else {
    desconto = 15;
}

console.log(`Você teve um desconto de...: ', ${desconto}% de desconto`);

// Exemplo 05 - Ternário
// const idadeVotacao = 18;

// if (idadeVotacao >= 18) {
//     console.log('Você é elegível para votar');
// } else {
//     console.log('Você não é elegível para votar');
// }

const idadeVotacao = 16;
const podeVotar = idadeVotacao >=18 ? 'Você pode votar' : 'Você não pode votar';
console.log(podeVotar);