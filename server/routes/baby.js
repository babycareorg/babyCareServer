var express = require('express');
var router = express.Router();

var addRouter = require('../baby/add');
var getRouter = require("../baby/get");
var dataRouter = require("../baby/data");
var babyRouter = require("../baby/delete");
var changeRouter = require("../baby/change");


router.use("/add", addRouter);
router.use("/get", getRouter);
router.use("/data", dataRouter);
router.use("/delete", babyRouter);
router.use("/change", changeRouter);



module.exports = router;