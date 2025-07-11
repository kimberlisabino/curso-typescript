// Exemplo 1 - Tipo Any
const a: any = 28;
const b: any = ['Kim'];

const result = a + b;
console.log(result); // ele junta as informações como se fosse uma string (28Kim)

// Exemplo 2 - Quanto o tipo Any é inferindo implicitamente
let frase;
frase = 'Oi, pessoal!';
console.log(frase);


// Exemplo 3 - Quando devemos usar o tipo any?
const formulario: {[campoFormulario: string]: any} = {
    nome: 'Kimberli',
    sobrenome: 'Sabino',
    idade: 28,
}

console.log(formulario);