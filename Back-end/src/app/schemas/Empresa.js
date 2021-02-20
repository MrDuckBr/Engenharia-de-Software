import mongoose from '@/database';

const EmpresaSchema = new mongoose.Schema({
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


export default mongoose.model('Empresa', EmpresaSchema);