const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://aperta:SiDaBe2021@apertadb.tdbak.mongodb.net/ApertaDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    console.log("open connection")
    console.log(client)
    console.log("finding collection")
    const coll = client.db("ApertaDB").collection("licenseplate");
    client.close();
});