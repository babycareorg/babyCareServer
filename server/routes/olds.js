var express = require('express');
var router = express.Router();

var addRouter = require('../olds/add')
var getRouter = require("../olds/get")

router.use("/add", addRouter)
router.use("/get", getRouter)

module.exports = router;