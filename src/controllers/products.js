//Importando o Model 
const ProductsModel = require('../models/products')

//Criando um método para o verbo GET
async function get(req, res) {
    const { id } = req.params
    
    var obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)


    res.send(products)
}

module.exports = {
    get,
}
