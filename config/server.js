var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

//incluindo o middleware 'body-parser'
app.use(bodyParser.urlencoded({ extended : true }));

consign()
    .include('app/routes') // incluindo rotas
    .then('config/dbConnection.js') //incluindo conexao
    .then('app/models') //carregando modelos
    .into(app);

module.exports = app;