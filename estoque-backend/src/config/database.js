// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('estoque', 'root', 'Senha123!', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;