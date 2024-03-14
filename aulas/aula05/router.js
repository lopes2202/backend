const express = require('express');

const router = express.Router();

module.exports = router;

router.get("/produtos", function(req, res){
    res.json([])
})