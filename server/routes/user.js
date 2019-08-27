var express = require('express');
var router = express.Router();
var registerRouter = require('../auth/register');
var loginRouter = require("../auth/login");
var changeRouter = require("../user/change")

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use("/change", changeRouter)


module.exports = router;