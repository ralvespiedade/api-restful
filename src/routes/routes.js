const router = require('express').Router()

const ProductController = require('../controllers/products')

router.get('/products/:id?', ProductController.get)
router.post('/products/:id?', ProductController.post)
router.put('/products/:id', ProductController.put)


module.exports = router