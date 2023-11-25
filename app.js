/**
 * Autor: Nicolas Vasconcelos 
 * objetivo: Montar um backend com acesso ao banco de dados
 * do projeto Tony-Pizzaria
 * 
 * Versão: 1.2
 * Data inicio: 24/11/2023
 * Data ultima modificação: 24/11/2023
 */

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connection = require('./database/database')

const clientes_controller = require('./controller/clientes_controller')

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 - http://localhost:3000/')
})