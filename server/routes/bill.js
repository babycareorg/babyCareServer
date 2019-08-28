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

    Bill.find({ phone: phone },"_id date price title", (err, res) => {
        console.log(res)
        response.send({
            bill: res,
            status: 200,
            msg: "成功"
        })
    })
})

router.get("/delete", (req, response, next) => {
    let id = req.query.id;

    Bill.deleteOne({ _id: id }, (err, res) => {
        if (err) {
            response.send(JSON.stringify({ status: 402, msg: "更新账单错误", error: err }));
        } else {
            console.log(res)
            if (res.ok == 1) {
                response.send(JSON.stringify({ status: 200, msg: "删除成功" }));                
            } else {
                response.send(JSON.stringify({ status: 402, msg: "更新账单错误"}));
            }
        }
    })
})

module.exports = router