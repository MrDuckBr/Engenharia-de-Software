import { Router } from 'express';
import ServicoSchema from '@/app/schemas/Servico';
import User from '@/app/schemas/User'
import Funcionario from '@/app/schemas/Funcionario';
import Produto from '@/app/schemas/Produto';

const router = new Router();

router.get('/disponiveis', (request, response) => {

  const {descricaoServico} = request.query

  User.find({ descricaoServico: { $ne: null } })
  .select(descricaoServico)
  .then((servico) => {
      return response.status(200).send(servico)
  })
  .catch((error) => {
    console.log(error)
    return response.status(400).send({message: 'Erro'})
  })
})

router.get('/cadastrados', (req, res) => {
  ServicoSchema.find()
  .then((servico)=> {
    console.log(servico)
    res.status(200).send(servico)
  })
  .catch((error)=>{
    res.status(400).send({error: 'ID não encontrado'})
  })
});


router.post('/cadastrar', (request, response) => {
  const {descricaoServico, produto1Qnt, produto2Qnt, produto3Qnt} = request.body
  const {nomeProd1, nomeProd2, nomeProd3} = request.query
  const {avaiable} = request.query
  let produt1 = ""
  let produt2 = ""
  let produt3 = ""

  User.findOne({descricaoServico})
  .then((user) => {
    if(descricaoServico == user.descricaoServico){

      Funcionario.findOne({ avaiable: { $ne: false }})
      .select(avaiable)
      .then((funcionario) => {
        console.log(funcionario.nome)
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

                    let nomeFunc = funcionario.nome
                    let nomeUser = user.nome
                    let idUser = user.id
                    let descricao = user.descricaoServico
                    ServicoSchema.create({idUser, nomeFunc, nomeUser, descricao})
                    .then((criou) => {

                      Funcionario.findByIdAndUpdate(funcionario._id, {avaiable: false}, {new: true})
                      .then((indisponivel) => {
                        console.log('Funcionario está com servico')
                      })
                      .catch((error) => {
                        console.log("Func erro" + " " + error)
                      })
                              
                      Produto.findByIdAndUpdate(prod._id, {$inc: {qtd1: -produto1Qnt, qtd2: -produto2Qnt, qtd3: -produto3Qnt} }, {new: true})
                      .then((teste) => {
                        console.log('Atualizou')
                      })
                      .catch((error) => {
                        console.log(error)
                      })
                      
  
                      User.findByIdAndUpdate( user.id, {descricaoServico: null, solicitado: false }, {new:true} )
                      .then((servico) => {
                          console.log("Mudou descricaoServico para null")
                      })
                      .catch((error) => {
                        console.log(error)
                        console.log( 'Erro ao setar null no descricaoServico')
                      })
                      return response.status(201).send('Serviço criado com sucesso')
                    })
                    .catch((error) => {
                      console.log(error)
                      return response.status(400).send('Não foi possivel criar servico')
                    })                   
                  }
                  else 
                  return response.status(400).send(`${prod.nomeProd3} insuficiente`)
                })            
              }
              else
                return response.status(400).send(`${prod.nomeProd2} insuficiente`)
            })
          }
          else 
            return response.status(400).send(`${prod.nomeProd1} insuficiente`)
        })
        .catch((error) => {
          console.log(error)
          return response.status(400).send('Impossível cadastrar serviço')
        })
      })
      .catch((error) => {
        console.log(error)
        response.status(400).send('Não há funcionários disponíveis')
      })
    }
    else
      return response.status(400).send('Servico não encontrado')
  })
  .catch((error) => {
    console.log(error)
    return response.status(400).send('Não foi possivel achar servico')
  })
})

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  const {descricaoServico} = req.query
  ServicoSchema.findByIdAndDelete(id)
  .then((Servico)=>{
    res.status(200).send("Serviço deletado com sucesso")
  })
  .catch((error)=>{
    res.status(400).send({error: 'ID não encontrado'})
  })
})


router.put('/:id',(req,res)=>{
  const id = req.params.id
  const {descricaoServico, produto1Qnt, produto2Qnt, produto3Qnt} = req.body
  ServicoSchema.findByIdAndUpdate(id, {descricao: descricaoServico, produto1: produto1Qnt, produto2: produto2Qnt, produto3: produto3Qnt},{new:true})
  .then((Servico)=>{
    console.log(Servico)
    res.status(200).send('Serviço atualizado com sucesso')
  })
  .catch((error)=>{
    res.status(400).send({error: 'ID não encontrado'})
  })
})


/**
 * router.post('/teste/:id', (request, response) => {
  const {lista} = request.body
  const id = request.params.id

  UserSchema.findOne({_id:id})
  .then((user) => {
    console.log(user)
    user.lista.push(lista)
    
    return response.send(user)
  })
  .catch((error) => {
    console.log(error)
    return response.send('nao foi')
  })
})
 */

export default router;
