export {};

// Exemplo 01 - Type Casting: as
const nome: unknown = 'Kimberli Sabino';
console.log((nome as string).toLowerCase());

// Exemplo 02 - Type Castingo: <>
const carro = 'Corolla';
const tamanhoString: number = (<string>carro).length;

console.log('O tamanho da string é...: ', tamanhoString);