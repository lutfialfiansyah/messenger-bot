'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.get('/', function(req, res){
    res.send("Hi I'm a bot.");
});

//facebook
app.get('/webhook/', function(req, res){
    if (req.query['hub.verify_token'] === 'lutfialfiansyah') {
        res.query(req.query['hub.challenge']);
    }
    res.send("Wrong token");
});

app.listen(app.get('port'), () => console.log('Webhook server is listening port 5000'));