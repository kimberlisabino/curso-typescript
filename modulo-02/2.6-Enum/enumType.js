"use strict";
// EExemplo 1 - Numeeric Enum
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugu\u00EAs"] = 0] = "Portugu\u00EAs";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingl\u00EAs"] = 2] = "Ingl\u00EAs";
    Idioma[Idioma["Franc\u00EAs"] = 3] = "Franc\u00EAs";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// Exemeplo 2 - String Enum
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Ter\u00E7a"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["S\u00E1bado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
function comida(c) {
    return 'Comidas apetitosas!';
}
console.log(comida(2 /* Comida.Pizza */));
console.log(comida(4 /* Comida.Churrasco */));
// Exemeplo 4 - Quando usar Enum?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["ToDo"] = 0] = "ToDo";
    Tarefa[Tarefa["Progrss"] = 1] = "Progrss";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso',
};
if (concluidaTarefa.status == Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa concluída!');
}
