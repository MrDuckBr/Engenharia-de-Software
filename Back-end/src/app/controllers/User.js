import { Router } from 'express';
import UserSchema from '../schemas/User';
import bcrypt from 'bcryptjs';

const router = new Router();

router.get('/', (req, res) => {

  UserSchema.find()
  .then((data) => {
    const users = data.map((user) =>{
     return {
        id: user._id,
        nome: user.nome, 
        email: user.email,
        documento: user.documento, 
        senha: user.password, 
        descricaoServico: user.descricaoServico,
        empresa: user.empresa}
    })
    res.send(users)
  })
  .catch((error)=> {
    console.log(error)
    return res.send({message: 'Usuários não encontrado'})
  })
});

router.post('/register', (request, response) => {
  const {nome, email, documento, password, empresa} = request.body

  UserSchema.create({nome, email, documento, password, empresa})
  .then((novoUser) =>{
    response.send(novoUser)
  })
  .catch((error) => {
    response.send({message: "Erro ao cadastrar User"})
  })
})

router.put('/solicitarServico/:id', (request, response) => {
    const {descricaoServico} = request.body;
    const {id} = request.params

    UserSchema.findByIdAndUpdate(id, {descricaoServico}, {new: true})
    .then((user) => {
        return response.send(user)
    })
    .catch((error) => {
        console.log(error)
        return response.send({message:'Impossível solicitar servico'})
    })

})

router.post('/login', (request, response) => {
  const {email, password} = request.body
  UserSchema.findOne({email})
  .select('+password')
  .then((user) => {
    if(password == user.password)
      return response.status(200).send('Usuário Logado')
    else
      return response.status(400).send('Senha incorreta')
  })
  .catch((error) => {
      return response.status(400).send('Usuário inexistente')
  })
})

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  UserSchema.findByIdAndUpdate(id, {descricaoServico: null}, {new: true})
  .then((User)=>{
    res.send(User)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})

router.get('/:id', (req, res) => {
 UserSchema.findById(req.params.id)
  .then((servico)=> {
    //console.log(servico)
    res.status(200).send(servico)
  })
  .catch((error)=>{
    res.status(400).send({error: 'ID não encontrado'})
  })
});


router.put('/:id',(req,res)=>{
  const id = req.params.id
  const {nome,email,documento, password} = req.body
  FuncionarioSchema.findByIdAndUpdate(id, {nome, email, docurmento, password},{new:true})
  .then((User)=>{
    res.send(User)
  })
  .catch((error)=>{
    res.send({error: 'ID não encontrado'})
  })
})

export default router;