"use strict";
// Exemplo 1 - Loop For
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Exemplo 2 - for ... 0f (retorna uma coleção de matriz, lista ou tupla)
const arrayNumeros = [10, 20, 30, 40, 50];
for (const i of arrayNumeros) {
    console.log(i);
}
// Exemplo 3 - for ... in
const arrayNumeros01 = [5, 4, 3, 2, 1, 0];
for (const i in arrayNumeros01) {
    console.log(i);
}
// sort()
const ordemNumerica = arrayNumeros01.sort();
console.log(ordemNumerica);
