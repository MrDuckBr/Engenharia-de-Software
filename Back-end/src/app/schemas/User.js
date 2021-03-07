import mongoose from '@/database';
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    documento: {
      type: String,
      required: true,
      default: 'xxx.xxx.xxx-xx'
    },
    password:{
      type: String,
      required: true,
    },
    descricaoServico: {
      type: String,
      required: false,
    },
    empresa: {
      type: Boolean
    }
});

UserSchema.pre('save', function(next){
  bcrypt.hash(this.password, 10)
  .then(hash => {
      this.password = hash
      next()
  })
  .catch(error => {
      console.error('Erro hashing password', error)
  })
})

export default mongoose.model('User', UserSchema);