//importar as bibliotecas do express
const express = require("express");

const routes = express.Router();

const watsonController = require("./app/controllers/watsonController");

routes.post("/mensagem", watsonController.mensagem);

module.exports = routes