var express = require('express');
var router = express.Router();
var registerRouter = require('../auth/register');
var loginRouter = require("../auth/login");

router.use('/register', registerRouter);
router.use('/login', loginRouter);


module.exports = router;