var express = require('express');
var router = express.Router();


var User = require("../models/user");

router.get("/", (req, response, next) => {

    let phone = req.query.phone;
    User.findOne({ mobilePhone: phone }, (err,doc) => {
        if (err) {
            response.end(JSON.stringify({status: 403, msg: "查找数据库失败"}))
        } else {
            response.send({olds: doc.olds})
        }
    })

})

module.exports = router;