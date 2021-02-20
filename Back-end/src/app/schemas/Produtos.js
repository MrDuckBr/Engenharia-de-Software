import mongoose from '@/database';


const ProdutosSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    preco:{
        type: Number,
        required: true,
    },
    quantidade:{
        type: Number,
        required: true,
    },
    descricao:{
        type: String,
        required: true,
    }
})