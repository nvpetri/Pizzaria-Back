const Sequelize = require('sequelize')

const connection = require("../database/database")

const Categoria = connection.define(
    'categorias', {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        icone: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }
)

Categoria.sync({ force: false })

module.exports = Categoria