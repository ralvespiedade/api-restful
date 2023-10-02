const mongoose = require('mongoose')

//Criando schema
const schema = new mongoose.Schema({
    name: String,
    brand: Number,
    price: String
})

//Definindo Model para a tabela products
const Model = mongoose.model('products', schema)


module.exports = Model