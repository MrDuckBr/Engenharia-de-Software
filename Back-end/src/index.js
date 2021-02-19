import express, { Router } from 'express'
import bodyParser from 'body-parser'

const app = express();
const router = new Router();
const port = 3000;

app.use(bodyParser.json());

router.get('/', (request, response) => {
    response.send({message: 'hello'})
})

app.use(router)

app.listen(port, () => {
    console.log(`Servidor rodando no link http://localhost:${port}`);
});




