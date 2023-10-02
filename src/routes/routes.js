const router = require('express').Router()

router.get('/clientes', (req, res) =>   {
    res.send({
        nome: "Luana"
    })
})


module.exports = router