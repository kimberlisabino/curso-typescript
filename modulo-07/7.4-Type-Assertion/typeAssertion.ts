export {};

// Exemplo 01 - Type Assertion (as / <>)
function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto);

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

// const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
const descontoFinal = <number>exibirPrecoFinal(100, 0.05, false);

console.log(descontoFinal);

// Exemplo 02
// type Humano = {
//     nome: string;
//     idade: number;
//     idioma: string;
// };

// const humano = {
//     idade: 29,
//     idioma: 'Português',
// }

// const humano2 = humano as Humano;
// console.log(humano2.nome.toUpperCase()); // joga o erro pro toUpperCase - permite executar o código

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
};

const humano = {
    idade: 29,
    idioma: 'Português',
}

const humano2: Humano = humano; // mostra antes de executar o código que tem uma propriedade faltando
console.log(humano2.nome.toUpperCase());