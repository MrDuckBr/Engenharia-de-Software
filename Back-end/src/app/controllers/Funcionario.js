import { Router } from 'express';
import FuncionarioSchema from '@/app/schemas/Funcionario';


const router = new Router();

router.get('/', (req, res) => {
  return res.send({ message: 'Hello world!' });
});

router.post('/', (request, response) => {
  const {nome} = request.body

  FuncionarioSchema.create({nome})
  .then((novoFuncionario) =>{
    console.log(novoFuncionario)
    response.send(novoFuncionario)
  })
  .catch((error) => {
    response.send({message: "Erro ao cadastrar funcionário"})
  })
})

export default router;
