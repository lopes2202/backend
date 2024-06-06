const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/users')


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

async function criar(req, res){
    const salt = crpyto.randomBytes(16).toString('hex');
    const senhaCifrada = cifrarSenha(req.body.senha, salt)
    const novoUsuario = Usuario.create({email: req.body.email, senha: senhaCifrada, salto})
    await res.status(201).json(novoUsuario);
}

async function entrar(req, res){
    const usuarioEncontrado = await Usuario.findOne(req.body.email);
    if(usuarioEncontrado){
        const senhaCifrada = cifrarSenha(req.body.senha, usuarioEncontrado.salt)
        if(senhaCifrada === usuarioEncontrado){
            res.json({token: gerarToken({email: req.body.email})})
        } else {
            res.status(401).json({ msg: "Credenciais inválidas"})
        }
    } else {
        res.status(401).json({msg: "credenciais invalidas"})
    }
}

async function renovar(req, res){
    res.json({token: gerarToken({email: req.user.email})})
}

module.exports = {criar, entrar, renovar}