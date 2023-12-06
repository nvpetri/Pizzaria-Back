const Sequelize = require('sequelize')
const connection = require('../database/database')
const Comentario = require('./comentario')

const Pizza = connection.define(
    'pizzas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        categoria: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        valor: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        avaliacao: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    })

Pizza.hasMany(Comentario)

module.exports = Pizza