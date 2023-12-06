const sequelize = require('sequelize')

const connection = new sequelize(
    'pizzaria_tony',
    'root',
    'bcd127', {
        host: '127.0.0.1',
        dialect: 'mysql',
        timezone: '-03:00'
    }
)

module.exports = connection