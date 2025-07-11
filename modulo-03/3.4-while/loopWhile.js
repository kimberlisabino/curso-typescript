"use strict";
// Exemplo 01 - while
let contador = 0;
while (contador < 5) { // Enquanto o valor da variável contador for menor que 5, o bloco dentro do while será executado
    console.log(contador);
    contador++;
}
// Quando o contador chegar a 5, o loop para de executar
// Exemplo 02
let numero = 1;
while (numero <= 20) { // Enquanto numero for menor ou igual a 20, executa o bloco
    if (numero % 5 == 0) { // analisa todos os número entre 1 e 20 - Verifica se o número atual é múltiplo de 5 (resto da divisão por 5 igual a 0)
        console.log('O primeiro número múltiplo de 5 entre 1 e 20 é...: ', numero);
        break;
    }
    numero++; // Se o número não for múltiplo de 5, incrementa ele em 1 e continua o loop
}
// Quando o loop encontra o primeiro múltiplo de 5 (no caso, o 5), ele para
// Exemplo 03 - exemplo mais prático
let contadorUsuario = 0;
const usuario = ['Kimberli', 'Christian', 'Teemo'];
while (usuario[contadorUsuario]) { // Enquanto houver um valor no índice atual do array (enquanto não for undefined ou vazio), executa o bloco
    console.log('Usuários...: ', usuario[contadorUsuario]); // Mostra o nome do usuário atual
    contadorUsuario++; // Passa para o próximo usuário (próximo índice do array)
}
// Quando chegar num índice que não existe (undefined), o loop para
// Exemplo 04 - do ... while
let contador01 = 0;
do { // Executa esse bloco pelo menos uma vez
    console.log(contador01);
    contador01++;
} while (contador01 < 5); // Verifica se o contador01 ainda é menor que 5. Se for, repete o bloco.
