var express = require('express');
var router = express.Router();

var api = require("../libs/api");

var User = require("../models/user");

router.get("/", (req, response, next) => {
    let newBaby;
    let phone = req.query.phone;
    newBaby.name = req.query.name;
    newBaby.sex = req.query.sex;
    newBaby.birthday = req.query.birthday;
    
    User.update({ mobilePhone: phone }, { $push: { babys: newBaby } }, (err, raw) => {
        if (err) {
            response.send(JSON.stringify({status: 401, msg: err}));
        } else {
            response.send(JSON.stringify({ status: 200, msg: "添加成功" }));
        }
    })
})

module.exports = router;