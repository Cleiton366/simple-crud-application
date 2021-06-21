const MongoClient = require('mongodb').MongoClient;
const connectionUrl = "mongodb+srv://admin:admin@cluster0.ypl29.mongodb.net/simple-crud-db?retryWrites=true&w=majority";
let db;
let clienteCollection;

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.error("Error while trying to connect to the data base: ", error);
    } else {
        console.log("Connected to the database");
        db = client.db("simple-crud-db");
        clienteCollection = db.collection("clientes");
    }
});

export { db, clienteCollection }