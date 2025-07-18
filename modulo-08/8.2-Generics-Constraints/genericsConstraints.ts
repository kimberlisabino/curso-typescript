export {};

// Exemplo 01 - Generic Constrainst
function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
    return {
        ...objeto1,
        ...objeto2,
    }
};

const pessoa = juntarObjetos(
    { nome: 'João', },
    { idade: 30, }
);

console.log(pessoa);

const pessoa2 = juntarObjetos(
    { nome: 'João',},
    2
);

console.log(pessoa2);

function juntarObjetos2<U extends object, V extends object>(objeto1: U, objeto2: V) {
    return {
        ...objeto1,
        ...objeto2,
    }
};

const pessoa3 = juntarObjetos2(
    { nome: 'João',},
    { idade: 30, }
);

// Exemplo 03 - Type parameter in generic constraints
// function prop<T, K>(objeto: T, chave: K) {
//     return objeto[chave];
// }

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
    return objeto[chave];
}

const pessoa4 = prop2(
    {nome: 'Kimberli'}, 'nome'
);

console.log(pessoa4);