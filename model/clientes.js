const Sequelize = require('sequelize')

const connection = require("../database/database")

const Cliente = connection.define(
    'clientes', {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telefone: {
            type: Sequelize.INTEGER(12),
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        },
        foto_perfil: {
            type: Sequelize.STRING,
            allowNull: true
        },
        cep: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        bairro: {
            type: Sequelize.STRING,
            allowNull: true
        },
        rua: {
            type: Sequelize.STRING,
            allowNull: true
        },
        numero: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        cidade: {
            type: Sequelize.STRING,
            allowNull: true
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: true
        },
        complemento: {
            type: Sequelize.STRING,
            allowNull: true
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
        }


    }
)

Cliente.sync({ force: false })

module.exports = Cliente