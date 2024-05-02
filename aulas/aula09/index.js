require("dotenv").config();
const mongoose = require("mongoose");
const Produto = require("./modelo");

const url = process.env.MONGODB_URL;

async function main() {
    try {
        await mongoose.connect(url);
        console.log("De boas");
    } catch (err) {
        console.log("Deu ruim!", err.message);
    }
    //   inserir 1 produto
    const produto = new Produto({
        nome: "u               ",
        preco: -1
    });
    try {
        await produto.save();
    } catch (err) {
        for (let key in err.errors) {
            console.log(err.errors[key].message);
        }
    }

    //   const produto = await Produto.create({
    //     nome: "uva",
    //     preco: 32.5,
    //     quantidade: 20,
    //   });
    //   console.log(produto);

    //   inserir N produtos
    //   const produtos = await Produto.insertMany([
    //     { nome: "pera", preco: 10, quantidade: 1 },
    //     { nome: "maca", preco: 15, quantidade: 7 },
    //     { nome: "mamao", preco: 20, quantidade: 5 },
    //   ]);
    //   console.log(produtos);

    //   consultar 1 produto
    //   const produto = await Produto.findOne({ nome: "banana" });
    //   console.log(produto);

    //   consultar N produtos
    // const produtos = await Produto.find({ nome: "banana" });
    // console.log(produtos);

    //   atualizar produto
    //   const produto = await Produto.findOneAndUpdate(
    //     { nome: "banana" },
    //     { nome: "banana nanica", preco: 8.5, quantidade: 20 }
    //   );
    //   const produto = await Produto.updateOne(
    //     { nome: "banana" },
    //     { nome: "banana prata", preco: 10, quantidade: 8 }
    //   );
    //   console.log(produto);

    // remover produto
    //const produto = await Produto.findOneAndDelete({ nome: "uva" });
    //console.log(produto);

    await mongoose.disconnect();
}

main();