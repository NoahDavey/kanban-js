var express = require('express');
var router = express.Router();
var testcard = require("../database/testcard.json")
const { getOne } = require("../database/mongo.js");

/* GET cards listing. */
router.get('/', function(req, res, next) {
  // res.send({"simple":"example"});   
  res.send(testcard);   
});

/* GET card with specified card number */ 
router.get('/:cardID', async function(req, res, next) {
  try{
    const connection = req.app.locals.db;
    const card = await connection.db('kanban').collection('cards').findOne({ cardID: Number(req.params.cardID) });

    if(card) {
      res.send(card)
    } else {
      res.sendStatus(404);
    }

  } catch (err) {
    next(err);
  }
})

module.exports = router;