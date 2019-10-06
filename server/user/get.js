var express = require("express");
var router = express.Router();

var User = require("../models/user");

router.get("/", (req, response, next) => {
    let phone = req.query.phone;

    User.find({ mobilePhone: phone }, (err, doc) => {
        if (err) {
            response.send(JSON.stringify({status: 403, msg: err}))
        }
        response.send({
            user: doc
        })
    })
})

module.exports = router;