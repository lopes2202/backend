const jwt = require('jsonwebtoken');

function validarToken(req, res, next){
    const token = req.headers['authorization']
    if(token){
        const payload = jwt.verify(token, "12345678");
        if(payload){
            console.log(payload)
            next();
        } else {
            res.status(401).json({msg: "acesso negado"})
        }
    } else {
        res.status(400).json({msg: "Não autorizado."})
    }
}

module.exports = validarToken