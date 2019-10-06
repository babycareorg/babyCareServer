var express = require('express');
var router = express.Router();

var uploadRouter = require("../share/upload");
var getRouter = require("../share/get");
var changeRouter = require('../share/delete');

router.use("/upload", uploadRouter);
router.use("/get", getRouter);
router.use('/delete', changeRouter);


module.exports = router;