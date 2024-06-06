const jwt = require('jsonwebtoken');

function verificarToken(req, res){
    const token = req.headers['authorization']
    if(token){
        const payload = jwt.verify(token, process.env.SEGREDO)
        if(payload){
            console.log(payload);
            next();
        }  else {
            res.status(401).json({msg: "token invalido"});
        }
    } else {
        res.status(400).json({msg: "token nao informado"})
    }
}

module.exports = {verificarToken}