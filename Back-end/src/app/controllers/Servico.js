import { Router } from 'express';
import ServicoSchema from '@/app/schemas/Servico';
import User from '@/app/schemas/User'
import Funcionario from '@/app/schemas/Funcionario';
import Produto from '@/app/schemas/Produto';

const router = new Router();

router.get('/listar', (request, response) => {

  const {descricaoServico} = request.query

  User.find({ descricaoServico: { $ne: null } })
  .select(descricaoServico)
  .then((servico) => {
      return response.send(servico)
  })
  .catch((error) => {
    console.log(error)
    return response.send({message: 'Erro'})
  })
})


router.post('/cadastrar', (request, response) => {
  const {descricaoServico} = request.query
  const {produto1Qnt, produto2Qnt, produto3Qnt} = request.body
  const {nomeProd1, qtd1, nomeProd2, qtd2, nomeProd3, qtd3} = request.query
  const {avaiable} = request.query
  let func = ""
  let produt1 = ""
  let produt2 = ""
  let produt3 = ""

  Funcionario.findOne({ avaiable: { $ne: false }})
  .select(avaiable)
  .then((funcionario) => {
    func = funcionario.nome

    Produto.findOne()
    .select(nomeProd1)
    .then((prod) => {
      if(prod.qtd1 >= produto1Qnt){
        produt1 = prod.nomeProd1
        
        Produto.findOne()
        .select(nomeProd2)
        .then((prod) => {
          if(prod.qtd2 >= produto2Qnt){
            produt2 = prod.nomeProd2
           
            Produto.findOne()
            .select(nomeProd3)
            .then((prod) => {
              if(prod.qtd3 >= produto3Qnt){
                produt3 = prod.nomeProd3

                Funcionario.findByIdAndUpdate(funcionario._id, {avaiable: false}, {new: true})
                .then((indisponivel) => {
                  console.log('Funcionario está com servico')
                })
                .catch((error) => {
                  console.log("Func erro" + " " + error)
                })
                        
                Produto.findByIdAndUpdate(prod._id, {$inc: {qtd1: -produto1Qnt, qtd2: -produto2Qnt, qtd3: -produto3Qnt} }, {new: true})
                .then((teste) => {
                  console.log('teste')
                })
                .catch((error) => {
                  console.log(error)
                })

                return response.send({message: `${produt1} ${produto1Qnt} / ${produt2} ${produto2Qnt} / ${produt3} ${produto3Qnt} Funcionario: ${func}`})
              }
              else 
              return response.send({message: `${prod.nomeProd3} insuficiente`})
            })            
          }
          else
            return response.send({message: `${prod.nomeProd2} insuficiente`})
        })
      }
      else 
        return response.send({message: `${prod.nomeProd1} insuficiente`})
    })
    .catch((error) => {
      console.log(error)
      return response.send({message:'Impossível cadastrar serviço'})
    })
  })
  .catch((error) => {
    console.log(error)
    response.send({message: 'Não há funcionários disponíveis'})
  })
})

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  const {descricaoServico} = req.query
  ServicoSchema.findByIdAndDelete(id)
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
