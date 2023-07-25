const Sequelize = require('sequelize')
const dbConfig = require('../config/database');

const User = require('../models/User');
const Pessoa = require('../models/Pessoa');
const connection = new Sequelize(dbConfig)
// User.init(connection)
Pessoa.init(connection)
module.exports = connection