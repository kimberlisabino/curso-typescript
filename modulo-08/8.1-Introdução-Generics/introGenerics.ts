export {};

// Exemplo 01 - Generics
function retornarElementosRandomicos<T>(item: T[]): T {
    let itemRandomico = Math.floor(Math.random() * item.length);
    return item[itemRandomico];
};

let numeros = [1, 2, 3, 4, 5];
let numeroRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(numeroRandomicos); // Retorna um número aleatório do array

let nomes = ['João', 'Maria', 'José', 'Ana'];
let nomesRandomicos = retornarElementosRandomicos<string>(nomes);
console.log(nomesRandomicos); // Retorna um nome aleatório do array

// Exemplo 02 - Generics
function exibirElementos<T>(array: T[]): void {
    array.forEach((elemento) => {
        console.log(elemento);
    });
};

let number: number[] = [1, 2, 3, 4, 5];
let states: string[] = ['SP', 'RJ', 'MG', 'RS'];

exibirElementos<number>(number); // Exibe os números
exibirElementos<string>(states); // Exibe os estados

