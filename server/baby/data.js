var express = require('express');
var router = express.Router();


var Baby = require("../models/baby");

router.get("/add", (req, response, next) => {
    let phone = req.query.phone;
    let id = req.query.id;
    let newData = {
        height: "",
        weight: "",
        time: ""
    }
    newData.height = req.query.height;
    newData.weight = req.query.weight;
    newData.time = req.query.time;

    Baby.update({ parent: phone, _id: id }, { $push: { data: newData } }, (err, doc) => {
        if (err) {
            response.send(JSON.stringify({ status: msg, msg: err }));
        } else {
            response.send(JSON.stringify({ status: 200, msg: "添加成功" }));
        }
    })

})

router.get("/get", (req, response, next) => {
    let phone = req.query.phone;
    let id = req.query.id;
    Baby.findOne({parent: phone, _id: id}, (err, doc) => {
        if (err) {
            response.end(JSON.stringify({status: 403, msg: "查找数据库失败"}))
        } else {
            response.send({data: doc.data})
        }
    })
})

module.exports = router;