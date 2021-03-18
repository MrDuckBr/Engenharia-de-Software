import mongoose from '@/database';

const ServicoSchema = new mongoose.Schema({
  descricao: {
    type: String,
    default: null
  },
  idUser: {
    type: String,
    required: true
  },
  nomeFunc: {
    type: String,
    required: true
  },
  produtos:{
    type:Array,
    required: true
  }
});

export default mongoose.model('Servico', ServicoSchema);
