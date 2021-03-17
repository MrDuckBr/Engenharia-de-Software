import { Router } from 'express';
import ProdutoSchema from '@/app/schemas/Produto';

const router = new Router();

router.get('/', (req, res) => {
  ProdutoSchema.find()
  .then((Produto)=> {
    return res.send(Produto)
  })
  .catch((error)=>{
    console.log(error)
    return res.send({error: 'ID não encontrado'})
  })
});

router.post('/', (request, response) => {
  const {nome} = request.body

  ProdutoSchema.create({nome})
  .then((novoProduto) =>{
    return response.send(novoProduto)
  })
  .catch((error) => {
    console.log(error)
    return response.send({message: "Erro ao cadastrar produto"})
  })
})

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  ProdutoSchema.findByIdAndRemove(id)
  .then((Produto)=>{
    return res.send(Produto)
  })
  .catch((error)=>{
    return res.send({error: 'ID não encontrado'})
  })
})


router.put('/:id',(req,res)=>{
  const id = req.params.id
  const {nome} = req.body
  ProdutoSchema.findByIdAndUpdate(id, {nome},{new:true})
  .then((Produto)=>{
    return res.send(Produto)
  })
  .catch((error)=>{
    console.log(error)
    return res.send({error: 'ID não encontrado'})
  })
})

export default router;
