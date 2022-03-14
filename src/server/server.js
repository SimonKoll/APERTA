const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
const MongoClient = require('mongodb').MongoClient
connstring = 'mongodb+srv://aperta:SiDaBe2021@cluster0.xh3v9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
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
        const db = client.db('ApertaDB')

        const licensplateCollection = db.collection('licenseplates')
        const rfidCollection = db.collection('rfid')
        const keypadCollection = db.collection('keypad')
            // All your handlers here...
        app.delete('/delete-rfid', (req, res) => {
            rfidCollection.findOneAndDelete({ "chip_id": req.body(id) })
        })
        app.delete('/delete-keypad', (req, res) => {
            keypadCollection.findOneAndDelete({ "pi": req.body(id) })
        })
        app.delete('/delete-licenseplate', (req, res) => {
            licensplateCollection.findOneAndDelete({ "licenseplate": req.body(id) })
        })
        app.post('/add-licenseplate', (req, res) => {
            licensplateCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        app.post('/add-keypad', (req, res) => {
            keypadCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        app.post('/add-rfid', (req, res) => {
            rfidCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        app.get('/get-keypad-codes', function(req, res) {
            db.collection('keypad').find().toArray()
                .then(results => {
                    console.log("retrieving keypad codes")
                    res.send(results)
                })
                .catch(error => console.error(error))
                // do something here
        })
        app.get('/get-licenseplates', function(req, res) {
            licensplateCollection.find().toArray()
                .then(results => {
                    console.log("retrieving licenseplates")
                    console.log(results)
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