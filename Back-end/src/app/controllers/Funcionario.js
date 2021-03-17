import { Router } from 'express';
import FuncionarioSchema from '@/app/schemas/Funcionario';

const router = new Router();

router.get('/', (req, res) => {
  FuncionarioSchema.find()
  .then((funcionario)=> {
    res.send(funcionario)
  })
  .catch((error)=>{
    res.status(400).send({error: 'ID não encontrado'})
  })
});

router.post('/', (request, response) => {
  const {nome, email,funcao} = request.body

  FuncionarioSchema.create({nome, email, funcao})
  .then((novoFuncionario) =>{
    response.status(201).send(`Funcionario ${novoFuncionario.nome} cadastrado`)
  })
  .catch((error) => {
    console.log(error)
    response.status(400).send('Erro ao cadastrar funcionário')
  })
})

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  FuncionarioSchema.findByIdAndRemove(id)
  .then((funcionario)=>{
    res.status(200).send(`Funcionario ${funcionario.nome} deletado`)
  })
  .catch((error)=>{
    res.status(400).send('Erro ao derrotar o Funcionário')
  })
})


router.put('/:id',(req,res)=>{
  const id = req.params.id
  const {nome,email,funcao} = req.body
  FuncionarioSchema.findByIdAndUpdate(id, {nome, email,funcao},{new:true})
  .then((funcionario)=>{
    res.status(200).send(`Funcionario ${funcionario.nome} atualizado`)
  })
  .catch((error)=>{
    res.status(400).send('Erro ao atualizar o funcionario')
  })
})


router.get('/:id',(req,res)=>{
  const id = req.params.id
  FuncionarioSchema.findById(id)
  .then((funcionario)=>{
    res.status(200).send(funcionario)
  })
  .catch((error)=>{
    res.status(400).send('Erro ao pegar o funcionario')
  })
})

export default router;
