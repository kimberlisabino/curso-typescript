// EExemplo 1 - Numeeric Enum
enum Idioma {
    Português,
    Espanhol,
    Inglês,
    Francês,
}

console.log(Idioma);

// Exemeplo 2 - String Enum
enum Dia {
    Segunda = 'SEG',
    Terça = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sábado = 'SAB',
    Domingo = "DOM",
}

console.log(Dia);

// Exemplo 3 - Como podemos aceessar um valor de Enum com uma chave (usando const)
const enum Comida {
    Hamburgueer,
    Massa,
    Pizza,
    Torta,
    Churrasco
}

function comida (c: Comida) {
    return 'Comidas apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));

// Exemeplo 4 - Quando usar Enum?
enum Tarefa {
    ToDo,
    Progrss,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso',
}

if (concluidaTarefa.status == Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa concluída!');
}