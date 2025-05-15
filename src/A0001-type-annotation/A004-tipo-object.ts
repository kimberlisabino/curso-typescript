const objetoA: {
    chaveA: string; // se colocar 'readonly' no início, ela não vai poder ser alterada
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown; // para o caso de precisar criar mais chaves depois
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor'; // posso mudar o valor
objetoA.chaveC = 'Nova chave'; // não consigo criar um novo pois o tipo já foi inferido

console.log(objetoA);
