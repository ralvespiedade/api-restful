const express = require('express')

const routes = require('./routes/routes')
const db = require('./database/db')

const app = express()

//Conexão com banco de dados
db.connect()

//Habilitar o servidor para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

//Definindo as rotas
app.use('/api', routes)
 

//Conexão com servidor
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})


