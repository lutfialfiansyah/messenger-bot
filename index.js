'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get('/', function(req, res){
    res.send("Hi I'm a bot.");
});

//facebook
app.get('/webhook/', function(req, res){
    if (req.query['hub.verify_token'] === "blondiebytes") {
        res.query(req.query['hub.challenge']);
    }
    res.send("Wrong token");
});

app.listen(3000, () => console.log('Webhook server is listening port 3000'));