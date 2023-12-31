//Importando o Model 
const ProductsModel = require('../models/products')

//Criando um método para o verbo GET
async function get(req, res) {
  const { id } = req.params
  
  var obj = id ? { _id: id } : null

  const products = await ProductsModel.find(obj)


  res.send(products)
}

async function post(req, res) {
  const {
    name,
    brand,
    price
  } = req.body

  const product = new ProductsModel({
    name,
    brand,
    price
  })

  product.save()

  res.send({
    message: "sucesso" 
  })

}

async function put (req, res) {
  const { id } = req.params
  
  
  const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

  res.send({
    message: "success",
    product
  })
    
}

async function remove(req, res) {
  const { id } = req.params

  const product = await ProductsModel.deleteOne({ _id: id} )

  var message = product ? "success" : "error"

  res.send({
    
    message
    
  })
  

}


module.exports = {
  get,
  post,
  put,
  remove
}
