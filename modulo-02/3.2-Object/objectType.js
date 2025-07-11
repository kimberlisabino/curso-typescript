"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 1 - Exemplo básico do uso de Object
const pessoa = {
    nome: 'Kimberli',
    sobrenome: 'Sabino',
    idade: 28,
    funcao: 'Dev'
};
console.log(pessoa);
// Exemplo 2 - object como parâmetros de funções (eles podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem-vinda ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Kimberli Sabino' }));
function onboarding02(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        ' ! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: 'Kimberli Sabino', funcao: 'Dev' }));
function onboarding03(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        ' ! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: 'Kimberli Sabino', funcao: 'Dev', linguagem: 'Javascript' }));
function onboarding04(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        ' ! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({ nome: 'Kimberli Sabino', funcao: 'Dev', linguagem: 'Javascript' }));
function onboarding05(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        ' ! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        'Seu e-mail será ' +
        pessoa.email +
        '.');
}
console.log(onboarding05({
    nome: 'Kimberli Sabino',
    funcao: 'Dev',
    linguagem: 'Javascript',
    email: 'kimberli@email.com'
}));
const filha = {
    nome: 'Kimberli',
    sobrenome: 'Sabino',
    idade: 28
};
console.log(filha);
const usuario = {
    nome: 'Kimberli Sabino',
    email: 'email@email.com'
};
const admin = {
    nome: 'Kimberli Sabino',
    email: 'email@email.com',
    admin: true
};
// Função do tipo geneeric
// Aceita tanto as informaçõees de usuário quanto de admin
function aceessarSistema(usuario) {
    return usuario;
}
console.log(aceessarSistema(usuario));
console.log(aceessarSistema(admin));
// function aceessarSistema(usuario: Usuario): Usuario {
//     return usuario;
// };
// console.log(aceessarSistema(usuario));
