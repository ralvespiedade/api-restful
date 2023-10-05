const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')
const db = require('./database/db')

const app = express()

//Conexão com banco de dados
db.connect()

//Habilita CORS

const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://www.app.com.br'
]
app.use(cors({
  origin: function(origin, callback) {
    var allowed = true

    //mobile app não tem origem
    if (!origin) Allowed = true

    if (!allowedOrigins.includes(origin)) allowed = false
    
    callback(null, allowed)

  }
}))

//Habilita server para receber dados json pelo corpo da requisição
app.use(express.json())

//Definindo as rotas
app.use('/api', routes)
 

//Conexão com servidor
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})


