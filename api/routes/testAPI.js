var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    console.log("This worked")
    res.send("API is working");
});

module.exports = router;