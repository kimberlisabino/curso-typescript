export { };

// Exemplo 01 - Uso do switch...case
let flor = 'tulipa';

switch (flor) {
    case 'rosa':
        console.log('Rosas são vermelhas');
        break;
    case 'violeta':
        console.log('Violetas são auzuis');
        break;
    case 'tulipa':
        console.log('Tulipas são brancas');
        break;

    default:
        console.log('Por favor, selecione uma outra flor!');
}

// Exemplo 02 - Uso do switch...case
let diaUtilSemana = 6;

switch (diaUtilSemana) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
    console.log('Quarta');
        break;
    case 4:
    console.log('Quinta');
        break;
    case 5:
    console.log('Sexta');
        break;

    default:
        console.log('Não é um dia útil');
}