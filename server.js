const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/dbConfig');

const app = express(); // Instance of express

const PORT = 8000;

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.uri, (err, database) => {
    if (err) {
        return console.log(err);
    }
    require('./app/routes') (app, database);
    app.listen(PORT, () => {
        console.log('We are live on ' + PORT);
    });
})