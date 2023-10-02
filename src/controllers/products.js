//Importando o Model 
const ProductsModel = require('../models/products')

//Criando um método para o verbo GET
async function get(req, res) {
    const products = await ProductsModel.find()

    res.send(products)
}

module.exports = {
    get,
}
