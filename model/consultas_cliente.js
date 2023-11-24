var clientes = require('./json/clientes')

const getListaDeClientes = () => {
    return clientes.clientes
}

const todosOsClientes = getListaDeClientes()
console.log(todosOsClientes)