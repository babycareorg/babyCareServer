var express = require('express');
var router = express.Router();

var multiparty = require('multiparty');
var fs = require('fs');
var path = require('path')

var api = require("../libs/api");

var User = require("../models/user");

router.get("/username", (req, response, next) => {
    let phone = req.query.phone;
    let username = req.query.username;
    api.update(User, {
        mobilePhone: phone
    }, {
            username: username
        }).then(() => {
            response.end(JSON.stringify({ status: 200, msg: "修改用户名成功" }));
        })
})

router.get("/emergency", (req, response, next) => {
    let phone = req.query.phone;
    let emergency = req.query.emergency;

    api.update(User, { mobilePhone: phone }, { emergency: emergency }).then(() => {
        response.end(JSON.stringify({ status: 200, msg: "设置成功"}))
    })
})

router.post('/imgurl', (req, response, next) => {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({ uploadDir: './public/avatar/' });
    //上传完成后处理
    form.parse(req, function (err, fields, files) {
        console.log("files: ", files);
        console.log("fields: ", fields);
        // console.log(fields.user[0])
        var filesTmp = JSON.stringify(files, null, 2);
        var phone = fields.phone[0];
        if (err) {
            console.log('parse error: ' + err);
        } else {
            // var inputFile = files.file[0];
            var inputFile = files.image[0];
            var uploadedPath = inputFile.path;
            var extname = path.extname(inputFile.originalFilename)
            var dstPath = './public/avatar/' + phone + extname;
            //重命名为真实文件名

            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                    console.log('rename error: ' + err);
                } else {
                    console.log('rename ok');
                }
            });
            api.update(User, {
                mobilePhone: phone
            }, {
                    imgUrl: phone + extname
                })
        }

        response.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
        response.write('received upload:\n\n');
        response.end(JSON.stringify({ status: 200, msg: "上传头像成功" }));
    })
});

module.exports = router;