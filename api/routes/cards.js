var express = require('express');
var router = express.Router();
var testcard = require("../database/testcard.json")
const { getOne } = require("../database/mongo.js");
var config = require('../database/config').default;

/* GET cards listing. */
router.get('/', function(req, res, next) {
  // res.send({"simple":"example"});   
  res.send(testcard);   
});

/* GET card with specified card number */ 
router.get('/:cardID', async function(req, res, next) {
  try{
    const connection = req.app.locals.db;
    const card = await connection.db(config.database.db_name).collection(config.database.card_collection).findOne({ cardID: Number(req.params.cardID) });

    if(card) {
      res.send(card)
    } else {
      res.sendStatus(404);
    }

  } catch (err) {
    next(err);
  }
})

/* POST card */
router.post('/', (req, res) => {
  const connection = req.app.locals.db;
  
  connection.db(config.database.db_name).collection(config.database.card_collection).insertOne(object, (err, res) => {
    if(err) throw err;
    console.log("A document was inserted!");
  });
})

module.exports = router;