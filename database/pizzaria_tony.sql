create database pizzaria_tony;

use pizzaria_tony;

CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone BIGINT NOT NULL,
    senha VARCHAR(255) NOT NULL,
    foto_perfil VARCHAR(255),
    cep INT,
    bairro VARCHAR(255),
    rua VARCHAR(255),
    numero INT,
    cidade VARCHAR(255),
    estado VARCHAR(255),
    complemento VARCHAR(255)
);

CREATE TABLE categorias (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    icone VARCHAR(255)
);

CREATE TABLE produtos (
    id INT PRIMARY KEY,
    categoria_id INT,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10, 2) NOT NULL,
    avaliacao INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE comentarios (
    id INT PRIMARY KEY,
    cliente_id INT,
    produto_id INT,
    data DATE NOT NULL,
    titulo VARCHAR(255),
    comentario TEXT,
    avaliacao INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

CREATE TABLE carrinho (
    id INT PRIMARY KEY,
    cliente_id INT,
    total DECIMAL(10, 2) NOT NULL,
    frete DECIMAL(10, 2) NOT NULL,
    endereco_entrega VARCHAR(255),
    quantidade INT NOT NULL,
    data_compra DATE,
    forma_pagamento VARCHAR(255),
    recibo VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

/* drop schema pizzaria_tony