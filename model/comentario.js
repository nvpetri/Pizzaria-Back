const Sequelize = require('sequelize')
const connection = require('../database/database')

const Comentario = connection.define(
    'comentarios', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        comentario: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        avaliacao: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        data_avaliacao: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    })

module.exports = Comentario