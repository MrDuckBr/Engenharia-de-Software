import { Router } from 'express';
import ProdutoSchema from '@/app/schemas/Produto';

const router = new Router();

router.get('/', (req, res) => {
  ProdutoSchema.find()
  .then((Produto)=> {
    res.send(Produto)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
});

router.post('/', (request, response) => {
  const {nome, quantidade} = request.body

  ProdutoSchema.create({nome, quantidade})
  .then((novoProduto) =>{
    response.send(novoProduto)
  })
  .catch((error) => {
    console.log(error)
    response.send({message: "Erro ao cadastrar produto"})
  })
})

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  ProdutoSchema.findByIdAndRemove(id)
  .then((Produto)=>{
    res.send(Produto)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})


router.put('/:id',(req,res)=>{
  const id = req.params.id
  const {nome, quantidade} = req.body
  ProdutoSchema.findByIdAndUpdate(id, {nome, quantidade},{new:true})
  .then((Produto)=>{
    res.send(Produto)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})

export default router;
