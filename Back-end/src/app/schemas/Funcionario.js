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
  avaiable: {
    type: Boolean
  }
});

export default mongoose.model('Funcionario', FuncionarioSchema);
