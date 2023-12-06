/**
 * Autor: Nicolas Vasconcelos 
 * objetivo: Montar um backend com acesso ao banco de dados
 * do projeto Tony-Pizzaria
 * 
 * Versão: 1.2
 * Data inicio: 24/11/2023
 * Data ultima modificação: 24/11/2023
 */

/**
 * Dependecias: express
 *  npm install express --save
 * 
 * Sequelize:
 *  npm install sequelize --save
 * 
 * MySql2:
 *  npm install mysql2 --save
 */

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connection = require('./database/database')

const clientes_controller = require('./controller/clientes_controller')
app.use('/', clientes_controller)

const categorias_controller = require('./controller/categorias_controller')
app.use('/', categorias_controller)

// const comentario_controller = require('./controller/comentario_controller')
// app.use('/', comentario_controller)

// const pizza_controller = require('./controller/pizza_controller')
// app.use('/', pizza_controller)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 - http://localhost:3000/')
})