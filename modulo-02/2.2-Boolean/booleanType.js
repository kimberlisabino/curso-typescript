"use strict";
// Exemplo 01
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
// Exemplo 02
let concluido = false;
if (concluido) { // chega no if verificando se o valor é true
    console.log('Essa tarefa foi concluída com sucesso');
}
else {
    console.log('Tarefa Pendente!'); // entra aqui, porque ela é false
}
// O if só executa se a condição for true. Caso contrário, vai pro else
// Se colocasse um !concluido no if, aí ele entraria
