// Biblioteca para o gerenciamento de rotas
const express = require('express');

// Importa os métodos do arquivo OngController
const OngController = require('./controllers/OngController');

// Importa os métodos do arquivo IncidentsController
const IncidentController = require('./controllers/IncidentController');

// Importa os métodos do arquivo ProfileController
const ProfileController = require('./controllers/ProfileController');

// Importa os métodos do arquivo SessionController
const SessionController = require('./controllers/SessionController')

// Desacopla o modulo de rotas do express em uma nova variável
const routes = express.Router();

routes.post('/session', SessionController.create)

// Lista Ongs
routes.get('/ongs', OngController.index)
// Cria Ongs
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;