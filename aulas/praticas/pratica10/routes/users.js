var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

router.post('/', controller.criar);


module.exports = router;
