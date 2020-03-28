const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // passar o ./ quando não estiver buscando pacote e sim um arquivo

const app = express();

app.use(cors());
app.use(express.json());    // Importante estar antes das rotas, antes das requisições, converter em JSON (utilizado para fazer a leitura de POSTs JSON)

app.use(routes);

app.listen(3333);
