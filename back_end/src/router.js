const express = require('express');
const routes = express.Router()
const UserController = require('./controllers/UserController')
const PessoaController = require('./controllers/PessoaController')
routes.get('/pessoa', PessoaController.index)
// routes.post('/users', UserController.store)

module.exports = routes