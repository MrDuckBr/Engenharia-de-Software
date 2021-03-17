import mongoose from '@/database';

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    defalt: ""
  }
});

export default mongoose.model('Produto', ProdutoSchema);
