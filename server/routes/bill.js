var express = require('express');
var router = express.Router();

var api = require("../libs/api");

var Bill = require("../models/bill");

router.get("/add", (req, response, next) => {
    let phone = req.query.phone;
    let date = req.query.date;
    let price = req.query.price;
    let title = req.query.title;

    api.save(Bill, {
        phone: phone,
        date: date,
        price: price,
        title: title
    }).then(() => {
        response.end(JSON.stringify({ status: 200, msg: "添加成功" }));
    })
})

router.get("/get", (req, response, next) => {
    let phone = req.query.phone; 

    Bill.find({ phone: phone },"date price title", (err, res) => {
        console.log(res)
        response.send({
            bill: res,
            status: 200,
            msg: "成功"
        })
    })
})

module.exports = router