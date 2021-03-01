import { Router } from 'express';
import FuncionarioSchema from '@/app/schemas/Funcionario';


const router = new Router();

router.get('/', (req, res) => {
  FuncionarioSchema.find()
  .then((funcionario)=> {
    res.send(funcionario)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
});

router.post('/', (request, response) => {
  const {nome, email, funcao} = request.body

  FuncionarioSchema.create({nome, email, funcao})
  .then((novoFuncionario) =>{
    console.log(novoFuncionario)
    response.send(novoFuncionario)
  })
  .catch((error) => {
    response.send({message: "Erro ao cadastrar funcionário"})
  })
})

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  FuncionarioSchema.findByIdAndRemove(id)
  .then((funcionario)=>{
    res.send(funcionario)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})


router.put('/:id',(req,res)=>{
  const id = req.params.id
  const {nome,email,funcao} = req.body
  FuncionarioSchema.findByIdAndUpdate(id, {nome, email, funcao},{new:true})
  .then((funcionario)=>{
    res.send(funcionario)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})

export default router;
