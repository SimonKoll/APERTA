const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://aperta:SiDaBe2021@apertadb.tdbak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("ApertaDB").collection("lincensplate").find().toArray()
        .then(results => {
            console.log("retrieving licenseplates")
            res.send(results)
        })
        .catch(error => console.error(error))
        // perform actions on the collection object
    client.close();
});