import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { Funcionario } from '@/app/controllers';


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/funcionario', Funcionario);

app.listen(port, () => {
  console.log(`Servidor rodando no link http://localhost:${port}`);
});
