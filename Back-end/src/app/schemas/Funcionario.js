import mongoose from '@/database';

const FuncionarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  funcao:{
    type: String,
    required: true,
  },
  funcionario: {
    type: String,
  },
  avaiable: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Funcionario', FuncionarioSchema);
