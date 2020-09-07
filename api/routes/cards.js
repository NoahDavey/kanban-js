var express = require('express');
var router = express.Router();
var config = require('../database/config').default;

/* GET all cards listing. */
//TODO: Find based on logged in user
router.get('/', async function(req, res, next) {
  try {
    const connection = req.app.locals.db;
    const cards = await connection.db(config.database.db_name).collection(config.database.card_collection).find({}).toArray(function(err, result) {
      if(err) throw err;
      res.send(result);
    });
  } catch (err) {
    next(err);
  }  
});

/* GET card with specified card number */
//TODO: Find based on logged in user 
router.get('/:cardID', async function(req, res, next) {
  try{
    const connection = req.app.locals.db;
    const card = await connection.db(config.database.db_name).collection(config.database.card_collection).findOne({ cardID: Number(req.params.cardID) });
    
    if(card) {
      res.send(card);
    } else {
      res.sendStatus(404);
    }
    
  } catch (err) {
    next(err);
  }
})

/* POST card */
//TODO: Get working with user input
var testObj = {
  "cardID": 6,
  "summary": "Do something else",
  "description": "Do stuff! And things that make things happen...",
  "created": "2020-08-28T14:10:00.000Z",
  "updated": "2020-08-28T14:10:00.000Z",
  "status": "done",
  "comments": "Im a comment!"
}

router.post('/', (req, res) => {
  const connection = req.app.locals.db;
  connection.db(config.database.db_name).collection(config.database.card_collection).insertOne(testObj, (err, result) => {
    if(err) throw err;
    res.send("Successfully inserted document:\n" + JSON.stringify(testObj));
  });
})

module.exports = router;