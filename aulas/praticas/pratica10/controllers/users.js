const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function cifrarSenha(senha, salt){
    const hash = crypto.createHmac('sha512', salt)
    hash.update(senha)
    return hash.digest('hex')
}

function gerarToken(payload){
    const expiresIn = 120
    try {
        jwt.sign(payload, process.env.SEGREDO);
    } catch(err) {
        throw new Exception("Erro a gerar um token");
    }
}