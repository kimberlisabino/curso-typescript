export {};

// Exemplo 01 - Generic Classes
class Estudante<T, U> {
    private id: T;
    private nome: U;


    setValor(id: T, nome: U): void {
        this.id = id;
        this.nome = nome;
    }

    retornarValor(): void {
        console.log(`Identificação: ${this.id}, Nome: ${this.nome}`);
    }
}

const estudante = new Estudante<number, string>();
const estudanteSecundario = new Estudante<string, string>();

estudante.setValor(101, 'João Silva');
estudante.retornarValor();

estudanteSecundario.setValor('202', 'Lucas Araujo');
estudanteSecundario.retornarValor();