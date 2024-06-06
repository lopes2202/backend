const express = require('express');

const controlador = require('../controllers/controllers_produto.js')

const router = express.Router();

router.get('/', produtosController.listarTodos);

router.get('/:produtoId', produtosController.buscarPeloId);

router.post('', produtosController.criar);

router.put('/:produtoId', produtosController.atualizar);

router.delete('/:produtoId', produtosController.remover);

module.exports = router;