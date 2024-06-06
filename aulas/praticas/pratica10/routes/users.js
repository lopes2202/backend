var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');
const auth = require('../middlewares/auth')

router.post('/', controller.criar);

router.post('/login', controller.entrar);

router.post('/renovar', auth.verificarToken, controller.renovar);


module.exports = router;
