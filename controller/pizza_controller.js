const express = require('express')
const router = express.Router()
const Pizza = require('../model/pizza')
const Comentarios_controller = require('./comentario_controller')


router.get(
    '/pizzas/listarPizzas',
    (req, res) => {
        Pizza.findAll()
            .then((pizzas) => {
                res.json({
                    Erro: '0',
                    Message: 'Pizzas listadas com sucesso!',
                    data: pizzas,
                })
            })
            .catch((error) => {
                res.status(500).json({
                    Erro: '1',
                    Message: 'Erro ao listar pizzas',
                    ErrorDetails: error.message,
                })
            })
    })


router.post(
    '/pizzas/cadastrarPizza',
    (req, res) => {
        const { categoria, nome, descricao, valor, avaliacao } = req.body

        Pizza.create({
                categoria,
                nome,
                descricao,
                valor,
                avaliacao,
            })
            .then(() => {
                res.json({
                    Erro: '0',
                    Message: 'Pizza criada com sucesso!',
                })
            })
            .catch((error) => {
                res.status(500).json({
                    Erro: '1',
                    Message: 'Erro ao criar pizza',
                    ErrorDetails: error.message,
                })
            })
    })


router.delete(
    '/pizzas/deletarPizza/:id',
    (req, res) => {
        const pizzaId = req.params.id

        Pizza.destroy({
                where: { id: pizzaId },
            })
            .then(() => {
                res.json({
                    Erro: '0',
                    Message: 'Pizza excluída com sucesso!',
                })
            })
            .catch((error) => {
                res.status(500).json({
                    Erro: '1',
                    Message: 'Erro ao excluir pizza',
                    ErrorDetails: error.message,
                })
            })
    })

router.use('/comentarios', Comentarios_controller)

module.exports = router