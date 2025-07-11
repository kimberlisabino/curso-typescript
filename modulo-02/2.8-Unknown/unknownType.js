"use strict";
// Exemplo 1 - Tipo Unknown
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi, tudo bem';
console.log(valorVariavel);
// Exemplo 2 -  Erro ao tentar atribuir um valor do tipo unknown a outros tipos
let valor;
let valor1 = valor;
let valor2 = valor;
let valor3 = valor;
let valor4 = valor;
// Exemplo 3 - Difeerença entr any ee unknown
let algumaCoisaAny;
let algumaCoisaUnknown;
console.log(algumaCoisaAny.toFixed(2));
console.log(algumaCoisaUnknown.toFixed(2));
if (typeof algumaCoisaUnknown == 'number') {
    console.log(algumaCoisaUnknown.toFixed());
}
