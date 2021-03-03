import mongoose from '@/database';

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  }
});

export default mongoose.model('Produto', ProdutoSchema);
