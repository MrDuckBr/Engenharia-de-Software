import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { Funcionario, User, Produto, Servico } from '@/app/controllers';
import cors from 'cors'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use('/funcionario', Funcionario);
app.use('/user', User);
app.use('/produto', Produto);
app.use('/servico', Servico);

export default app
