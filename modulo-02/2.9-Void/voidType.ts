// exemplo 1 - Funções
function logError(errorMessage: string) {
    console.log(errorMessage);
}

logError('Required field - Name');

// Exemplo2 - Arrow function
const logErrorExample2 = (errorMessage: string) => {
    console.log(errorMessage);
};

logErrorExample2('Required field - Surname');

// Exemplo 3 - Variáveis
let variavelExemploVoid: void;
variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);

