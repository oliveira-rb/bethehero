/*const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

routes.post('/exampletest/', (request, response) => {
    /*
        Tipos de Paramêtros:
        *   Query Params: Parâmetros nomeados enviados na rota após '?' (filtros, paginação) ex: http://localhost:3333/users?nome=Rafael (get)
        *   Route Params: Parâmetros utilizados para identificar recursos. Ex: http://localhost:3333/users/1  -- busca dados do usuário id 1 caso
                o recurso seja '/users/:id'
        *   Request body: Corpo da requisição, utilizado para criar ou alterar recursos.
                método post - formato JSON ex:   {"name": "Rafael Oliveira", "idade": 25}
    
    //const params = request.query; // Acessar acessar o parâmetro passado no request 
    const body = request.body; // Para acessar o route precisa utilizar o params e o recurso precisa seguir o modelo: '/users/:1'

    console.log(body);


    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Rafa Oliveira'
    })
});


routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);

//routes.delete('/ongs', OngsController.delete);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);

routes.post('/session', )


module.exports = routes;

*/