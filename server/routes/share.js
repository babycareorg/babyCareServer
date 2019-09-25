var express = require('express');
var router = express.Router();

var uploadRouter = require("../share/upload");
var getRouter = require("../share/get");

router.use("/upload", uploadRouter);
router.use("/get", getRouter);


module.exports = router;