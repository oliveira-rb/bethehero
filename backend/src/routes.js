const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);

//routes.delete('/ongs', OngsController.delete);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);


module.exports = routes;