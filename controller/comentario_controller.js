const express = require('express')
const router = express.Router()
const Comentario = require('../model/comentario')
const Pizza = require('../model/pizza')

router.post(
    '/comentarios/cadastrarComentario/:pizzaId',
    (req, res) => {
        const { usuario, comentario, avaliacao, data_avaliacao } = req.body
        const pizzaId = req.params.pizzaId

        Comentario.create({
                usuario,
                comentario,
                avaliacao,
                data_avaliacao,
                pizzaId,
            })
            .then(() => {
                res.json({
                    Erro: '0',
                    Message: 'Comentário criado com sucesso!',
                })
            })
            .catch((error) => {
                res.status(500).json({
                    Erro: '1',
                    Message: 'Erro ao criar comentário',
                    ErrorDetails: error.message,
                })
            })
    })

router.get(
    '/comentarios/listarComentarios/:pizzaId',
    (req, res) => {
        const pizzaId = req.params.pizzaId

        Pizza.findByPk(pizzaId, { include: Comentario })
            .then((pizza) => {
                if (!pizza) {
                    return res.status(404).json({
                        Erro: '1',
                        Message: 'Pizza não encontrada',
                    })
                }

                res.json({
                    Erro: '0',
                    Message: 'Comentários listados com sucesso!',
                    data: pizza.comentarios,
                })
            })
            .catch((error) => {
                res.status(500).json({
                    Erro: '1',
                    Message: 'Erro ao listar comentários',
                    ErrorDetails: error.message,
                })
            })
    })

module.exports = router