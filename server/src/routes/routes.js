const express = require('express')
const promptController = require('../controllers/prompt-controller')

//Está criando uma rota/url imaginaria.
const routes = express.Router()
routes.post('/api/prompt', promptController.sendText)

module.exports = routes