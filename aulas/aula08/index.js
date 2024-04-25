const { MongoClient, ObjectId } = require('mongodb')

const url = 'mongodb+srv://adminLopes:gabriellopes123@gabriellopes.pit0w5m.mongodb.net/';
const client = new MongoClient(url);


async function conectar() {
    try {
        await client.connect();
    } catch(error) {
        console.log("Deu ruim");
    }
}

async function inserir(produto){
    const db = client.db('loja');
    return await db.collection('produtos').insertOne(produto);
}

async function listar(){
    const db = client.db('loja');
    return await db.collection('produtos').find({}).toArray();
}

async function atualizar(id, produto) {
    const db = client.db('loja');
    return await db.collection('produtos').updateOne({_id: new ObjectId(id)}, {$set: produto})
}

async function remover(id){
    const db = client.db('loja');
    return await db.collection('produtos').deleteOne({_id: new ObjectId(id)})
}

async function main() {
    await conectar();

    let result = await inserir({nome: "açai", preco: 35.00});
    console.log("Produto inserido", result);

    result = await listar();
    console.log("lista de produtos", result);

    result = await atualizar("662a59cf5e36a9b84b7bc4de", {nome: "maca", preco: 20.00});
    console.log("Produto atualizado", result)

    result = await remover('662a59cf5e36a9b84b7bc4de');
    console.log("Produto removido", result);

    await client.close();

}

main();