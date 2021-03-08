import mongoose from '@/database';

const ServicoSchema = new mongoose.Schema({
  descricao: {
    type: String,
  },
  produto1: {
    type: String,
  },
  produto2: {
    type: String,
  },
  produto3: {
    type: String,
  },
  idUser: {
    type: String,
    required: true
  },
  nomeFunc: {
    type: String,
    required: true
  },
  nomeUser: {
    type: String,
  }
});

export default mongoose.model('Servico', ServicoSchema);
