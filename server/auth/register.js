var express = require('express');
var router = express.Router();
var api = require('../libs/api')
var config = require("../config/develop")

var User = require("../models/user");
var Code = require("../models/code");

// var sendMail = require("../libs/sendEmail");
var ssender = require("../libs/sendSms")

router.get('/', (req, res, next) => {
    res.send("success");
})


router.get('/getCode', (req, response, next) => {
    let phone = req.query.phone;
    var phoneNum = [];
    phoneNum.push(phone)
    api.findOne(User, {
        mobilePhone: phone
    }).then(resq => {
        if (resq != null) {
            response.end((JSON.stringify({ status: 203, msg: '该手机号已被注册' })));
        } else {
            let code = "";
            for (let i = 0; i < 6; i++) {
                code += Math.floor(Math.random() * 10);
            }
            var params = ["babyCare", code, "20"]
            api.findOne(Code, {
                phone: phone
            }).then(resq => {
                if (resq == null) {
                    api.save(Code, {
                        phone: phone,
                    }).then(res => {
                        api.update(Code, {
                            phone: phone,
                        },
                            {
                                phone: phone,
                                code: code
                            })
                        ssender.sendWithParam(86, phoneNum[0], config.QcloudSms.registerTem, params, config.QcloudSms.signature, "", "", (err, respo, resData) => {
                            if (err) {
                                console.log('error', err)
                                response.end(JSON.stringify({ status: 204, msg: '验证码发送失败' }));
                            } else {
                                response.end(JSON.stringify({ status: 200, msg: '验证码已发送' }));
                                console.log(resData)
                            }
                        })
                    })
                } else {
                    api.update(Code, {
                        phone: phone,
                    },
                        {
                            phone: phone,
                            code: code
                        })
                    ssender.sendWithParam(86, phoneNum[0], config.QcloudSms.registerTem, params, config.QcloudSms.signature, "", "", (err, respo, resData) => {
                        if (err) {
                            console.log('error', err)
                            response.end(JSON.stringify({ status: 204, msg: '验证码发送失败' }));
                        } else {
                            response.end(JSON.stringify({ status: 200, msg: '验证码已发送' }));
                            console.log(resData)
                        }
                    })
                }
            }).catch(error => {
                console.log(error)
            })
            // res.end(JSON.stringify({ status: 200, msg: '验证码已发送' }));
        }
    })
})

//添加用户
router.post('/add_user', (req, res, next) => {
    let email = req.body.email
    let code = req.body.code
    let username = req.body.username
    let password1 = req.body.password1
    let password2 = req.body.password2

    var p1 = api.findOne(Code, { email: email });
    var p2 = api.findOne(User, { username: username });

    console.log(req.body);

    Promise.all([p1, p2]).then(resp => {
        if (resp[0] == null)
            res.end(JSON.stringify({ status: 204, msg: '请先获取验证码再注册' }));
        else if (resp[1] != null)
            res.end(JSON.stringify({ status: 206, msg: '用户名已被注册' }))
        else {
            if (resp[0].code != code)
                res.end(JSON.stringify({ status: 205, msg: '验证码错误' }))
            else {
                if (password1 != password2)
                    res.end(JSON.stringify({ status: 207, msg: '密码不一致' }))
                else
                    api.save(User, {
                        email: email,
                        username: username,
                        password: password1,
                        created_at: new Date().toLocaleString(),
                        mobilePhone: "",
                        imageUrl: '',
                        friends: [],
                        individuality: "",
                        birthplace: "",
                        livePlace: "",
                        emergencyPhone: ""
                    }).then(() => {
                        res.end(JSON.stringify({ status: 200, msg: '注册成功' }))
                    })
            }
        }
    })
})

module.exports = router;