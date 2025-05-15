// tuple

const dadosCliente1: [number, string] = [1, 'Kim'];
const dadosCliente2: [number, string, string] = [1, 'Kim', 'Sabino'];
const dadosCliente3: [number, string, string?] = [1, 'Kim'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Kim', 'Sabino'];


dadosCliente1[0] = 100;
dadosCliente1[1] = 'Kimberli';
// dadosCliente1[2] = 'Sabino'; // não funciona porque a quantidade de valores do Array já está definida

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly

const array1: readonly string[] = ['Kim', 'Sabino'];
const array2: ReadonlyArray<string> = ['Kim', 'Sabino'];

console.log(array1);
console.log(array2);
