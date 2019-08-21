var express = require('express');
var router = express.Router();
var registerRouter = require('../auth/register');

router.use('/register', registerRouter);


module.exports = router;