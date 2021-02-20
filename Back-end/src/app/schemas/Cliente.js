import mongoose from '@/database';

const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password:{
        type: String,
        required: true,
      } 
    
});

export default mongoose.model('Cliente', ClienteSchema);