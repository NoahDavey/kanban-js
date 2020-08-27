var express = require('express');
var router = express.Router();
var testcard = require("../database/testcard.json")

/* GET cards listing. */
router.get('/', function(req, res, next) {
  // res.send({"simple":"example"});   
  res.send(testcard);   
});

module.exports = router;