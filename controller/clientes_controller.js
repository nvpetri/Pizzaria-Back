const express = require('express')

const app = express()

const router = express.Router()

const Cliente = require('../model/clientes')

router.get(
    '/cliente/listarCliente',
    (req, res) => {
        Cliente.findAll()
            .then((Clien) => {
                res.json({
                    data: Clien,
                    Erro: '0',
                    Message: "Clientes listados com sucesso!",
                    Referencia: '1',
                    Params: '200'
                })
            })
    }
)

router.post(
    '/cliente/cadastrarCliente',
    (req, res) => {
        const { nome, email, telefone, senha, foto_perfil, cep, bairro, rua, numero, cidade, estado, complemento } = req.body

        Cliente.create({
            nome,
            email,
            telefone,
            senha,
            foto_perfil,
            cep,
            bairro,
            rua,
            numero,
            cidade,
            estado,
            complemento
        }).then(
            () => {
                res.json({
                    data: null,
                    Erro: '0',
                    Message: "Cliente cadastrado com sucesso!"
                })
            }
        )
    }
)

router.delete(
    '/cliente/deletarCliente/:id',
    (req, res) => {
        const { id } = req.params

        Cliente.findByPk(id)
            .then((Clien) => {
                Cliente.destroy({
                    where: { id }
                }).then(
                    () => {
                        res.json({
                            Erro: '0',
                            Message: "Cliente excluido com sucesso!",
                            Referencia: '1',
                            Params: '11540'
                        })
                    }
                )
            })
    }
)

module.exports = router