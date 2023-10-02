const express = require('express')

const routes = require('./routes/routes')
const db = require('./database/db')

const app = express()

//Conexão com banco de dados
db.connect()

//Habilita server para receber dados json pelo corpo da requisição
app.use(express.json())

//Definindo as rotas
app.use('/api', routes)
 

//Conexão com servidor
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})


