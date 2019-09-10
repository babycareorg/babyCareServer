var express = require('express');
var router = express.Router();

var api = require("../libs/api");

var User = require("../models/user");

router.get("/", (req, response, next) => {
    let newOld;
    let phone = req.query.phone;
    newOld.name = req.query.name;
    newOld.sex = req.query.sex;
    newOld.birthday = req.query.birthday;
    newOld.phone = req.query.emePhone;
    
    User.update({ mobilePhone: phone }, { $push: { olds: newOld } }, (err, raw) => {
        if (err) {
            response.send(JSON.stringify({status: 401, msg: err}));
        } else {
            response.send(JSON.stringify({ status: 200, msg: "添加成功" }));
        }
    })
})

module.exports = router;