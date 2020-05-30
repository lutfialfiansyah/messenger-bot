'use strict'

const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
// const express = require('express');
// const bodyParser = require('body-parser');
// const request = require('request');
// const app = express();

// app.set('port', (process.env.PORT || 5000))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.get('/', function(req, res){
    res.send("Hi I'm a bot.");
});

//facebook
app.post('/webhook', (req, res) => {  
 
    let body = req.body;
  
    if (body.object === 'page') {
  
      body.entry.forEach(function(entry) {
  
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);
      });
  
      res.status(200).send('EVENT_RECEIVED');
    } else {
      res.sendStatus(404);
    }
  
});

  app.get('/webhook', (req, res) => {

    let VERIFY_TOKEN = "lutfi";
    let VERIFY_MODE = "subscribe";
      
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    if (mode && token) {
    
      if (mode === VERIFY_MODE && token === VERIFY_TOKEN) {
        
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        res.sendStatus(403);      
      }
    }
});
// app.get('/webhook/', function(req, res){
//     if (req.query['hub.verify_token'] === 'lutfialfiansyah') {
//         res.query(req.query['hub.challenge']);
//     }
//     res.send("Wrong token");
// });

// app.listen(app.get('port'), () => console.log('Webhook server is listening port 5000'));