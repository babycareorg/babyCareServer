var express = require('express');
var router = express.Router();

var addRouter = require('../olds/add')


router.use("/add", addRouter)

module.exports = router;