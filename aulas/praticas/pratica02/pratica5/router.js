const express = require('express');

const router = express.Router();

const produtos = [];

router.get("/produtos", function(req, res) {
    res.json(produtos); 
  });


  router.post('/produtos', function(req, res){
    if(req.body && req.body.nome && req.body.preco) {
        const novo = {
            id: produtos.length + 1,
            nome: req.body.nome,
            preco: req.body.preco
        }
        produtos.push(novo);
        res.status(201).json(novo);
    } else {
        res.status(422).json({msg: "Produto não encontrado"});
        
    }
});

router.get("/produtos/:produtoid", function(req, res){
    const encontrado = produtos.find(item => item.id == req.params.produtoid);
    if(encontrado) {
        res.json(encontrado);
    } else {
        res.status(404).json({msg: "Produto não encontrado"})
    }
});

router.put('/produtos/:produtoid', function(req, res){
    const encontrado = produtos.find(item => item.id == req.params.produtoid);
    if(encontrado) {
        encontrado.nome = req.body.nome;
        encontrado.preco = req.body.preco;
        res.json({encontrado});
    } else {
        res.status(404).json({msg: "Produto não encontrado"});
    }
});


router.delete("/produtos/:produtoid", function (req, res) {
    const posicao = produtos.findIndex(item => item.id == req.params.produtoid);
    if(posicao >= 0){
        produtos.splice(posicao, 1);
        res.status(204).end();
    } else {
        res.status(404).json({msg: "Produto não encontrado"});
    }
});














module.exports = router;