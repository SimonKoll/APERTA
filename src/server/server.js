const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
const MongoClient = require('mongodb').MongoClient
connstring = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.2.3'
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
MongoClient.connect(connstring, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('aperta')

        const licensplateCollection = db.collection('licenseplate')
        const rfidCollection = db.collection('rfid')
        const numpadCollection = db.collection('numpad')
            // All your handlers here...
        app.delete('/delete-rfid', (req, res) => {
            rfidCollection.findOneAndDelete({ "chip_id": req.body(id) })
        })
        app.delete('/delete-numpad', (req, res) => {
            numpadCollection.findOneAndDelete({ "pi": req.body(id) })
        })
        app.delete('/delete-licenseplate', (req, res) => {
            licensplateCollection.findOneAndDelete({ "licenseplate": req.body(id) })
        })
        app.post('/add-licenseplate', (req, res) => {
            console.log(req)
            licensplateCollection.insertOne(req.body)
                .then(result => {
                    console.log('licenseplate added')
                    res.send(200)
                })
                .catch(error => console.error(error))
        })
        app.post('/add-numpad', (req, res) => {
            numpadCollection.insertOne(req.body)
                .then(result => {
                    console.log('numpad code added')
                    res.send(200)
                })
                .catch(error => console.error(error))
        })
        app.post('/add-rfid', (req, res) => {
            rfidCollection.insertOne(req.body)
                .then(result => {
                    console.log('rfid code added')
                    res.send(200)
                })
                .catch(error => console.error(error))
        })
        app.get('/get-numpad-codes', function(req, res) {
            db.collection('numpad').find().toArray()
                .then(results => {
                    console.log("retrieving numpad codes")
                    res.send(results)
                })
                .catch(error => console.error(error))
                // do something here
        })
        app.get('/get-licenseplates', function(req, res) {
            licensplateCollection.find().toArray()
                .then(results => {
                    console.log("retrieving licenseplates")
                    res.send(results)
                })
                .catch(error => console.error(error))
                // do something here
        })
        app.get('/get-rfid-codes', function(req, res) {
            db.collection('rfid').find().toArray()
                .then(results => {
                    console.log("retrieving rfid codes")
                    res.send(results)
                })
                .catch(error => console.error(error))
                // do something here
        })


    }).catch(console.error)

app.listen(3000, function() {
    console.log('listening on 3000')
})
