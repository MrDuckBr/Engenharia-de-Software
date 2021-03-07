import mongoose from '@/database';

const ServicoSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true,
  },
  produto1: {
    type: String,
    required: true,
  },
  produto2: {
    type: String,
    required: true,
  },
  produto3: {
    type: String,
    required: true,
  },
  user:{
    type: String,
    required: true
  },
  func: {
    type: String,
  }
});

export default mongoose.model('Servico', ServicoSchema);
