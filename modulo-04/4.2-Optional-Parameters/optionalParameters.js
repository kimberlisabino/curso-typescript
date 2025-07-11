"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01 - Optiona Parameter
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id Funcionário...: ', idPessoa, 'Nome...: ', nome);
    if (email != undefined)
        console.log('E-mail...: ', email);
}
informarDadosPessoa(775544, 'Kimberli Sabino');
informarDadosPessoa(996633, 'Christian Lemos', 'christian@exemplo.com');
// Exemplo 02
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}
mensagemLog('Atualizar Página');
mensagemLog('Usuário(a) logado(a) com sucesso', 778800);
let pessoa;
pessoa = {
    idFuncionario: 445566,
    nome: 'Kimberli Sabino',
};
console.log(pessoa);
