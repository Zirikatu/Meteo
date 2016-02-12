// DATABASE CONFIG
var Sequelize = require('sequelize');

module.exports = new Sequelize('meteo', 'test', 'azerty', {
  host: 'localhost',
  dialect: 'mysql'
});

