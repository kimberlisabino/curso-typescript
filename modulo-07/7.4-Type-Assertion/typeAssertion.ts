export {};

// Exemplo 01 - Type Assertion (as / <>)
function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto);

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

// const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
const descontoFinal = <number>exibirPrecoFinal(100, 0.05, false);

console.log(descontoFinal);