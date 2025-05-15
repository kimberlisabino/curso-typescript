function semRetorno(...args: string[]): void {
    console.log(args.join(''));
}

const pessoa = {
    nome:'Kim',
    sobrenome: 'Sabino',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};


semRetorno('Luiz','Kim');
pessoa.exibirNome();

export { pessoa };
