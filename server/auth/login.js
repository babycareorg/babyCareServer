var express = require('express');
var router = express.Router();
var api = require('../libs/api')

var User = require("../models/user")

router.post("/", (req, response, next) => {
    let phone = req.body.phone;
    let password = req.body.password;

    api.findOne(User, {
        mobilePhone: phone
    }).then(res => {
        if (res == null) {
            response.end(JSON.stringify({ status: 201, msg: "手机号未注册" }));
        } else {
            if (res.password != password) {
                response.end(JSON.stringify({ status: 211, msg: "密码错误" }));
            } else {
                //这里需要存储session并且保存登录状态
                response.send(JSON.stringify({ created: res.created, username: res.username, phone: res.mobilePhone, status: 200, msg: "登录成功" }));
            }
        }
    })
})

router.post("/session", (req, response, next) => {
    response.end(JSON.stringify({ status: 500, msg: "接口未实现" }))
})

module.exports = router;