import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { Funcionario, User, Produto, Servico } from '@/app/controllers';
import cors from 'cors'

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use('/funcionario', Funcionario);
app.use('/user', User);
app.use('/produto', Produto);
app.use('/servico', Servico);

app.listen(port, () => {
  console.log(`Servidor rodando no link http://localhost:${port}`);
});
