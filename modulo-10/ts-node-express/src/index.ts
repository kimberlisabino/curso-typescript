import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000; // define a porta da aplicação

app.use(helmet()); // adiciona segurança básica com Helmet
app.use(express.json()); // permite o uso de JSON no corpo das requisições
app.use(express.urlencoded({ extended: true })); // permite o uso de dados codificados em URL

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello, Kim! Bem-vinda ao typescript com Express.Js!</h1>'); // rota de teste
});

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`); // mensagem de confirmação
});