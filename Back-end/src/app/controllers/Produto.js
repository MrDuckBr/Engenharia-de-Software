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
  const {nomeProd1, qtd1, nomeProd2, qtd2, nomeProd3, qtd3} = request.body

  ProdutoSchema.create({nomeProd1, qtd1, nomeProd2, qtd2, nomeProd3, qtd3})
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
  const {qtd1, qtd2, qtd3} = req.body
  ProdutoSchema.findByIdAndUpdate(id, {$inc: {qtd1: qtd1, qtd2: qtd2, qtd3: qtd3}},{new:true})
  .then((Produto)=>{
    res.send(Produto)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})

export default router;
