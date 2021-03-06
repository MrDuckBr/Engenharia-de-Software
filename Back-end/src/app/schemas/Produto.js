import mongoose from '@/database';

const ProdutoSchema = new mongoose.Schema({
  nomeProd1: {
    type: String,
    defalt: ""
  },
  qtd1: {
    type: Number,
    default: 0
  },
  nomeProd2: {
    type: String,
    defalt: ""
  },
  qtd2: {
    type: Number,
    default: 0
  },
  nomeProd3: {
    type: String,
    defalt: ""
  },
  qtd3: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('Produto', ProdutoSchema);
