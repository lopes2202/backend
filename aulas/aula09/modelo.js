const mongoose = require('mongoose');

const produtosSchema = new mongoose.Schema({
    nome: {type: String, trim: true, uppercase: true, required: [true, "Nome é obrigatorio"], minLength: [3, "Nome tem no minimo 3 caracteres"]},
    preco: {type: Number, required: [true, "Preço é obrigatorio"], min: [0, "Preço deve ser >= 0"]},
    quantidade: {type: Number, default: 0}
});

module.exports = mongoose.model("Produto", produtosSchema);