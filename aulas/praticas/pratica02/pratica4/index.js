const express = require('express');

const app = express();

app.use(express.json());

app.get("/", function(req, res){
    res.status(200).send("Você fez uma requisição GET");
})

app.post("/", function(req, res) {
    res.status(201).send("Você fez uma requisição POST");
} )

app.put("/", function(req, res) {
    res.status(200).send("Você fez uma requisição PUT");
})

app.delete("/", function(req, res) {
    res.status(204).send("Você fez uma requisição DELETE");
})

app.listen(3000, function(){
    console.log("Api esta ON!");
})


module.exports = app;
