const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'PASSWORD REMOVED FOR GIT', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;