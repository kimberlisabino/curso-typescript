export { };

// Exemplo 1 - Exemplo básico do uso de Object
const pessoa = {
    nome: 'Kimberli',
    sobrenome: 'Sabino',
    idade: 28,
    funcao: 'Dev'
}

console.log(pessoa);

// Exemplo 2 - object como parâmetros de funções (eles podem ser anônimos)
function onboarding01(funcionario: { nome: string }) {
    return 'Seja bem-vinda ' + funcionario.nome
}

console.log(onboarding01({nome: 'Kimberli Sabino'}));

// Exemplo 3 - object nomeados
interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa) {
    return (
        'Seja bem-vinda ' +
        pessoa.nome +
        ' ! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.'
    );
}

console.log(onboarding02({ nome: 'Kimberli Sabino', funcao: 'Dev' }));


// Exemplo 4 - object como type alias 
type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onboarding03(pessoa: Pessoa03) {
    return (
        'Seja bem-vinda ' +
        pessoa.nome +
        ' ! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.'
    );
}

console.log(onboarding03({ nome: 'Kimberli Sabino', funcao: 'Dev', linguagem: 'Javascript' }));

// Exemplo 5 - usando optional no object
interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string; // o email é opcional
}

function onboarding04(pessoa: Pessoa04) {
    return (
        'Seja bem-vinda ' +
        pessoa.nome +
        ' ! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.'
    );
}

console.log(onboarding04({ nome: 'Kimberli Sabino', funcao: 'Dev', linguagem: 'Javascript' }));



// Exemplo 6 - Propriedade 'readonly' (se deseja proibir que os devs modifiquem um determinado objeto)
interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string; //não pode ser gravada durante a verificação de tipo
}

function onboarding05(pessoa: Pessoa05) {
    return (
        'Seja bem-vinda ' +
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
        '.'
    );
}

console.log(onboarding05(
    { 
        nome: 'Kimberli Sabino', 
        funcao: 'Dev', 
        linguagem: 'Javascript',
        email: 'kimberli@email.com'
    }
));

// Exemplo 7 - tipos de extensões (heranças)
interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}


// Herda as informações de nome e sobrenome das inteerfaces Mae e Pai
interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha = {
    nome: 'Kimberli',
    sobrenome: 'Sabino',
    idade: 28

}

console.log(filha);

// Exemplo 8 - Tipos de Interseções
interface Cachorro {
    tipo: string;
}

interface Gato {
    tipo: string;
}

type Animal = Cachorro & Gato; // Encontro entre dois conjuntos


// Exemplo 9 - Generic Objects
type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Kimberli Sabino',
    email: 'email@email.com'
}

const admin: Admin = {
    nome: 'Kimberli Sabino',
    email: 'email@email.com',
    admin: true
}

// Função do tipo geneeric
// Aceita tanto as informaçõees de usuário quanto de admin
function aceessarSistema<T>(usuario: T) {
    return usuario;
}

console.log(aceessarSistema<Usuario>(usuario));
console.log(aceessarSistema<Admin>(admin));


// function aceessarSistema(usuario: Usuario): Usuario {
//     return usuario;
// };

// console.log(aceessarSistema(usuario));