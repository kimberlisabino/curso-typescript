export {};

// Exemplo 01 - Intersection Types
interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
    conta: 123456,
    agencia: 123,
    banco: 'Banco do Brasil',
    nome: 'Kimberli Sabino',
    email: 'kimberli@exemplo.com',
    cpf: 812365489,
}

console.log(dadosCliente);