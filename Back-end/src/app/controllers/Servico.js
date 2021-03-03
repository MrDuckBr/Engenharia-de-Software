import { Router } from 'express';
import ServicoSchema from '@/app/schemas/Servico';
import User from '@/app/schemas/User'

const router = new Router();

router.get('/', (req, res) => {
  ServicoSchema.find()
  .then((Servico)=> {
    res.send(Servico)
  })
  .catch((error)=>{
    res.send({error: 'Não há serviços cadastrados'})
  })
});

router.get('/listar', (request, response) => {

  const {descricaoServico} = request.query

  User.find({descricaoServico})
  .then((servico) => {
      return response.send(servico)
  })
  .catch((error) => {
    console.log(error)
    return response.send({message: 'Erro'})
  })
})

router.post('/cadastrar', (request, response) => {
    const {produto1, produto2, produto3} = request.body
    
    
  })
  

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  ServicoSchema.findByIdAndRemove(id)
  .then((Servico)=>{
    res.send(Servico)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})


router.put('/:id',(req,res)=>{
  const id = req.params.id
  const {nome,email,funcao} = req.body
  ServicoSchema.findByIdAndUpdate(id, {nome, email, funcao},{new:true})
  .then((Servico)=>{
    res.send(Servico)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})

export default router;
