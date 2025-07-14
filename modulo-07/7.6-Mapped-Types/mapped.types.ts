export {};

// Exemplo 01 - Mapped Types
type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
};

type UsuarioOpcional = {
    nome?: string;
    endereco?: string;
    telefone?: string;
    idade?: number;
};

type UsuarioSomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;
};

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P];
};

// 'nome' | 'endereco' | 'telefone' |'idade'
// O in faz uma varredura em cima do usuário até identificar as informações que de fato estão dentro desse type
// Usuario[P] é ele pegando cada propriedade de Usuario e criando um novo com elas

const usuarioMapped: UsuarioMappedType = {
    nome: 'Kimberli Sabino',
    endereco: 'Rua 01',
}

console.log(usuarioMapped);


// Exemplo 02 - Outros Tipos Avançados
interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;
}

// Omite uma propriedade
type Artigo = Omit<Livro, 'numeroPaginas'>;

// Torna todas as propriedades readonly
type LivroModelo =  Readonly<Livro>;

const livro: LivroModelo = {
    autor: 'Machado de Assis',
    numeroPaginas: 300,
    preco: 25.99,
    titulo: 'Dom Casmurro'
}

// livro.autor = 'Kimberli' // não deixa porque a propriedade é readonly