const express = require('express');

const router = express.Router();

const produtos = [];

router.get("/produtos", function(req, res) {
    res.json(produtos); 
  });

router.get("/produtos/:produtoid", function(req, res){
    const encontrado = produtos.find(item => item.id == req.params.produtoid)
    if(encontrado) {
        res.json(encontrado);
    } else {
        res.status(404).json({msg: "Produto não encontrado"})
    }
});

router.put('/produtos', function(req, res){
    const encontrado = produtos.find(item => item.id == req.params.produtoid)
    if(encontrado) {
        encontrado.nome = req.body.nome;
        encontrado.preco = req.body.preco;
        res.json({encontrado});
 } else {
    res.status(404).json({msg: "Produto não encontrado"})
 }
})
















module.exports = router;