# Aww Bot (Messenger Chatbot)

#### Installation instructions

`$ git clone https://github.com/lutfialfiansyah/messenger-bot.git`

`$ cd messenger-bot`

`$ npm install`

`$ node index.js`

curl -H "Content-Type: application/json" -X POST "localhost:1337/webhook" -d '{"object": "page", "entry": [{"messaging": [{"message": "TEST_MESSAGE"}]}]}'
  #### get
  
  `http://localhost:1337/webhook?hub.verify_token=lutfi&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe`
  
  #### post
  
  #### In your terminal run :
  
  `curl -H "Content-Type: application/json" -X POST "localhost:1337/webhook" -d '{"object": "page", "entry": [{"messaging": [{"message": "TEST_MESSAGE"}]}]}'`

#### In my server heroku :

`https://fast-island-98814.herokuapp.com` 

`https://fast-island-98814.herokuapp.com/webhook?hub.verify_token=lutfi&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe` 

### Build 

1. https://expressjs.com/

2. https://www.heroku.com/

3. https://developers.facebook.com/
