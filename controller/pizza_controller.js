const express = require('express')
const router = express.Router()
const Pizza = require('../model/pizza')
const Categoria = require('../model/categorias')

Pizza.belongsTo(
    Categoria, {
        foreignKey: 'categoriaId',
        as: 'categoriaAssoc'
    })

router.get(
    '/pizzas/listarPizzas',

    (req, res) => {
        Pizza.findAll({
                include: Categoria,
            })
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
        const { categoriaId, nome, descricao, valor, avaliacao } = req.body

        Categoria.findByPk(categoriaId)
            .then((categoriaExistente) => {
                if (!categoriaExistente) {
                    return res.status(400).json({
                        Erro: '1',
                        Message: 'Categoria não encontrada',
                    })
                }

                Pizza.create({
                        categoriaId,
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

module.exports = router;