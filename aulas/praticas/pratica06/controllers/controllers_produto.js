const produtos = [];

function listarTodos(req, res) {
    res.json(produtos)
}

function buscarPeloId(req, res) {
    const produtoEncontrado = produtos.find(item => item.Id == req.params.produtoId);    
    if(produtoEncontrado) {
        res.json(produtos)
    } else {
        res.status(404).json({msg: "Produto não encontrado"})
    }
}

function criar(req, res) {
    nome = req.body.nome;
    preco = req.body.preco;
    if(nome && preco) {
        const novoProduto = {
            id: produtos.length + 1,
            nome,
            preco
        }
        produtos.push(novoProduto);
        res.status(201).json(novoProduto);
    } else {
        res.status(404).json({msg: "Produto não encontrado"})
    }
}


