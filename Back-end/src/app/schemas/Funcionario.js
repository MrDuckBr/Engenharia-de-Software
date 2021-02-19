import mongoose from '@/database';

const FuncionarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Funcionario', FuncionarioSchema);
