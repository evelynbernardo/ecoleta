const express = require('express')
const server = express()

//pegar o banco de dados
const db = require('./database/db')

// configurar pasta pública
server.use(express.static("public"))


//utilizando template engine
const nunjucks= require("nunjucks")
nunjucks.configure("src/views", {
    express: server, 
    nocache: true
})

// configurar caminhos da minha aplicação
// página inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

server.listen(3000)
