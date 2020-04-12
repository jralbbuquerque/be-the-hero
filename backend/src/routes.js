// Biblioteca para o gerenciamento de rotas
const express = require('express');

// Biblioteca para validação
const { celebrate, Segments, Joi } = require('celebrate');

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

routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), SessionController.create)

// Lista Ongs
routes.get('/ongs', OngController.index)

// Cria Ongs -- Validação no body da requisição (celebrate)
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),    
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(), 
}), IncidentController.create)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index)

routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;