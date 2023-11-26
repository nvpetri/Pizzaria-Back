const express = require('express')

const app = express()

const router = express.Router()

const Categoria = require('../model/categorias')

router.get(
    '/categorias/listarCategoria',
    (req, res) => {
        Categoria.findAll()
            .then((Cat) => {
                res.json({
                    data: Cat,
                    Erro: '0',
                    Message: "Categorias listadas com sucesso!",
                    Referencia: '1',
                    Params: '200'
                })
            })
    }
)

router.post(
    '/categorias/cadastrarCategoria',
    (req, res) => {
        const { nome, icone } = req.body

        Categoria.create({
            nome,
            icone
        }).then(
            () => {
                res.json({
                    data: null,
                    Erro: '0',
                    Message: "Categoria criada com sucesso!"
                })
            }
        )
    }
)

router.delete(
    'categorias/deletarCategoria/:id',
    (req, res) => {
        const { id } = req.params

        Categoria.findByPk(id)
            .then((Cat) => {
                Categoria.destroy({
                    where: { id }
                }).then(
                    () => {
                        res.json({
                            Erro: '0',
                            Message: "Categoria removida com sucesso!",
                            Referencia: '1',
                            Params: '11540'
                        })
                    }
                )
            })
    }
)

module.exports = router