/**
 * 
 * @author Ivan Zanon
 * 
 * @description Main server class
 * 
 */
const express = require('express');
const cors = require('cors');
const sequelize = require('./infra/database/models');

const routes = require('./src/routes');

 //Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

//Testando conexão com o Banco de dados.
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados OK!');
  })
  .catch(err => {
    console.log('Erro na conexão.');
  });

app.use('/api', require("./src/routes"));
app.listen(3002);