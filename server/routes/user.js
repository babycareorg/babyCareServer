var express = require('express');
var router = express.Router();
var registerRouter = require('../auth/register');
var loginRouter = require("../auth/login");
var changeRouter = require("../user/change")
var getRouter = require("../user/get");

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use("/change", changeRouter);
router.use("/get", getRouter);


module.exports = router;