// Exemplo 1 - Never - Throw Exception
function error(message: string): never {
    throw new Error(message);
}

console.log(error('Erro de Mesageem - 01'));

// Exemplo 2 - Never inferido automaticamente
function rejectMessage() {
    return error('Error de Mensagem - 02');
}

console.log(rejectMessage());

// Exemplo 3 - Função que contém loop infinito retorna o tipo 'never'
const loopInfinito = function loop() {
    while(true) {
        console.log('Oi, developers!');
    }
};

// console.log(loopInfinito());

// Exemplo 4 - Diferença entre os tipos never e void
const algumaCoisaVoid: void = null;
const algumaCoisaNever: never = null; // o never não aceita nenhum valor
