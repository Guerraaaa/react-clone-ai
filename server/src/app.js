// Primeira configuração do servidor, basicamente está dizendo que o aplicativo vai utilizar o express, cors, dotenv
// Esse APP é nosso arquivo main no front 

const express = require("express")
const cors = require("cors") 
const routes = require("./routes/routes")
//Dotenv está pegando as config() que está no env
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)
module.exports = app