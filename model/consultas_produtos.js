var produtos = require('./json/produtos')

const getListaProdutos = () => {
    return produtos.produtos
}

const listaProdutos = getListaProdutos()

console.log(listaProdutos)