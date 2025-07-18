"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000; // define a porta da aplicação
app.use((0, helmet_1.default)()); // adiciona segurança básica com Helmet
app.use(express_1.default.json()); // permite o uso de JSON no corpo das requisições
app.use(express_1.default.urlencoded({ extended: true })); // permite o uso de dados codificados em URL
app.get('/', (req, res) => {
    res.send('<h1>Hello, Kim! Bem-vinda ao typescript com Express.Js!</h1>'); // rota de teste
});
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`); // mensagem de confirmação
});
