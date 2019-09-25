var express = require('express');
var router = express.Router();

var addRouter = require('../baby/add');
var getRouter = require("../baby/get");
var dataRouter = require("../baby/data");


router.use("/add", addRouter);
router.use("/get", getRouter);
router.use("/data", dataRouter);


module.exports = router;