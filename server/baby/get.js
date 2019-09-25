var express = require('express');
var router = express.Router();


var Baby = require("../models/baby");

router.get("/", (req, response, next) => {

    let phone = req.query.phone;
    Baby.find({ parent: phone }, (err,doc) => {
        if (err) {
            response.end(JSON.stringify({status: 403, msg: "查找数据库失败"}))
        } else {
            response.send({babys: doc})
        }
    })

})

module.exports = router;