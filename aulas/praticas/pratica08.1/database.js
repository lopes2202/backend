const  {MongoClient} = require("mongodb");

const url = "mongodb+srv://adminLopes:gabriellopes123@gabriellopes.pit0w5m.mongodb.net/";

let db = null;

async function conectarDb() {
    if(db == null) {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("agenda");
}
    return db;
}

module.exports = conectarDb;
