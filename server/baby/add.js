var express = require('express');
var router = express.Router();

var api = require("../libs/api");

var Baby = require("../models/baby");

router.get("/", (req, response, next) => {

    let phone = req.query.phone;
    let name = req.query.name;
    let sex = req.query.sex;
    let birthday = req.query.birthday;

    api.save(Baby, {
        parent: phone,
        name: name,
        birthday: birthday,
        sex: sex
    }).then(() => {
        response.send(JSON.stringify({ status: 200, msg: "添加成功" }));
    })
    
})

module.exports = router;