export {};


// Exemplo 01 - Satisfies Operator
type Cidade = NomeCidade | CidadeCoordenadas;

type NomeCidade = "São Paulo" | "Rio de Janeiro" | "Belo Horizonte";

type CidadeCoordenadas = {
    x: number;
    y: number;
};

type Pessoa = {
    localNascimento: Cidade;
    residenciaAtual: Cidade;
};

const pessoa = {
    localNascimento: "São Paulo",
    residenciaAtual: { x: 10, y: 20 },
} satisfies Pessoa

console.log(pessoa.localNascimento.toUpperCase());

// Exemplo 02 - Satisfies Operator
type Connection = {}; // Define um tipo vazio chamado Connection

// Declara uma função que cria uma conexão, com parâmetros específicos e retorna um Connection
declare function createConnection(
    host: string,        // Endereço do host (string)
    port: string,        // Porta (string)
    reconnect: boolean,  // Se deve tentar reconectar (boolean)
    poolsize: number     // Tamanho do pool de conexões (number)
): Connection;

// Define o tipo Configuration com propriedades para configuração de conexão
type Configuration = {
    host: string;                         // Host como string
    port: string | number;                // Porta pode ser string ou number
    tryReconnect: boolean | (() => boolean); // Pode ser boolean ou função que retorna boolean
    poolSize?: number;                    // poolSize é opcional
};

// Cria um objeto config e garante que ele satisfaz o tipo Configuration
const config ={
    host: "localhost",        // Host definido como "localhost"
    port: 8080,               // Porta definida como número 8080
    tryReconnect: () => true  // Função que retorna true para tentar reconectar
} satisfies Configuration;    // Usa o operador satisfies para garantir compatibilidade com Configuration

// Função que utiliza o objeto config para criar uma conexão
function connect() {
    let { host, port, tryReconnect } = config; // Desestrutura as propriedades de config

    // Chama createConnection convertendo port para string, executando tryReconnect (função), e passando poolsize 10
    createConnection(host, `${port}`, tryReconnect(), 10);
}