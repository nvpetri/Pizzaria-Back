const Sequelize = require('sequelize')

const connection = require("../database/database")

const Categoria = connection.define(
    'categorias', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
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