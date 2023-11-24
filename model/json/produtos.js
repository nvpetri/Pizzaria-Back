var categorias = {
    categoria: [{
            id: 1,
            nome_categoria: "Pizza Completa",
            icone: ""
        },
        {
            id: 2,
            nome_categoria: "Pizza Brotinho",
            icone: ""
        },
        {
            id: 3,
            nome_categoria: "Bebidas",
            icone: ""
        },
        {
            id: 4,
            nome_categoria: "Bebidas para maiores de 18",
            icone: ""
        },
        {
            id: 5,
            nome_categoria: "Sobremesas",
            icone: ""
        }
    ]
}

var clientes = require('./clientes')

var produtos = {
    produtos: [{
            id: 1,
            categoria: categorias.categoria[0],
            nome: "Pizza de calabresa",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            valor: "R$16,65",
            avaliacao: 4,
            comentarios: [{
                usuario: clientes.clientes[2],
                comentario: "Essa calabresa parece uma linguiça",
                avaliacao: 4,
                data_avaliacao: "05/09/2023"
            }]
        },
        {
            id: 2,
            categoria: categorias.categoria[1],
            nome: "Mini pizza de calabresa",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            valor: "R$13,65",
            avaliacao: 5,
            comentarios: [{
                usuario: clientes.clientes[0],
                comentario: "Tava muito pequena, acho que ainda estava 'brotando'",
                avaliacao: 5,
                data_avaliacao: "07/02/2023"
            }]
        },
        {
            id: 3,
            categoria: categorias.categoria[3],
            nome: "Heineken",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            valor: "R$7,86",
            avaliacao: 3,
            comentarios: [{
                usuario: clientes.clientes[1],
                comentario: "",
                avaliacao: 3,
                data_avaliacao: "23/12/2022"
            }]
        },
        {
            id: 4,
            categoria: categorias.categoria[4],
            nome: "Sorvete Gelado e não Quente",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            valor: "R$2,50",
            avaliacao: 4,
            comentarios: [{
                usuario: clientes.clientes[2],
                comentario: "O meu chegou quente... Mas estava gostoso",
                avaliacao: 4,
                data_avaliacao: "12/09/2023"
            }]
        },
        {
            id: 5,
            categoria: categorias.categoria[2],
            nome: "Coca-Cola 2L",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            valor: "R$8,50",
            avaliacao: 5,
            comentarios: [{}]
        }
    ]
}

module.exports = { produtos }