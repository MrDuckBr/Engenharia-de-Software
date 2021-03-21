import { Router } from 'express';
import ServicoSchema from '@/app/schemas/Servico';
import User from '@/app/schemas/User'
import Funcionario from '@/app/schemas/Funcionario';
import Produto from '@/app/schemas/Produto';

const router = new Router();
//Falta arrumar
router.get('/disponiveis', (request, response) => {

  const {descricaoServico} = request.query

  User.find({ descricaoServico: { $ne: null } })
  .select(descricaoServico)
  .then((servico) => {
      return response.status(200).send(servico)
  })
  .catch((error) => {
    //console.log(error)
    return response.status(400).send({message: 'Erro'})
  })
})

router.get('/cadastrados', (req, res) => {
  ServicoSchema.find()
  .then((servico)=> {
    //console.log(servico)
    res.status(200).send(servico)
  })
  .catch((error)=>{
    res.status(400).send({error: 'ID não encontrado'})
  })
});


router.get('/:id', (req, res) => {
  ServicoSchema.find()
  .then((servico)=> {
    //console.log(servico)
    res.status(200).send(servico)
  })
  .catch((error)=>{
    res.status(400).send({error: 'ID não encontrado'})
  })
});



//Falta produtos e ver como sera o usuarioo
router.post('/cadastrar', (request, res) => {
  const {descricaoServico,funcionario, produtos, usuario} = request.body
  //const {} = request.query
  //const {avaiable} = request.query
      ServicoSchema.create({descricao:descricaoServico, idUser:usuario, nomeFunc:funcionario, produtos})
      
      
      .then(() => {
        Funcionario.findOneAndUpdate({nome:funcionario},{avaiable: false}, {new:true})
          .then(()=>{
            User.findByIdAndUpdate(usuario,{descricaoServico: null}, {new:true})
            .then(()=>{
              res.status(201).send('Cadastrado')
            }).catch(()=>{
              res.status(400).send('Erro ao encontrar o Usuario')
            })
              
          }).catch(()=>{
            res.status(400).send("funcionario deu ruim")
          })
      })
      .catch(()=>{
        res.status(400).send("nao conseguiu criar servico")
      })
})
  
 

                      


router.delete('/:id',(req,res)=>{
  
  const id = req.params.id
  const {descricaoServico} = req.query
  ServicoSchema.findByIdAndDelete(id)
  .then((Servico)=>{
    console.log(Servico.nomeFunc)
    Funcionario.findOneAndUpdate({nome:Servico.nomeFunc},{avaiable: true}, {new:true})
    .then(()=>{
      res.status(200).send("Serviço deletado com sucesso")
    }).catch(()=>{
      res.status(400).send('Deu Ruim')
    })
    
  })
  .catch((error)=>{
    res.status(400).send({error: 'ID não encontrado'})
  })
})

//Falta arrumar
router.put('/:id',(req,res)=>{
  const id = req.params.id
  const {descricaoServico,funcionario, produtos, usuario} = req.body
  ServicoSchema.findByIdAndUpdate(id, {descricao:descricaoServico, idUser:usuario, nomeFunc:funcionario, produtos },{new:true})
  .then((Servico)=>{
    //.log(Servico)
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
