var express = require('express');
var router = express.Router();

var multiparty = require('multiparty');
var fs = require('fs');
var path = require('path')

var api = require("../libs/api");

var Share = require("../models/share");


router.post('/imgurl', (req, response, next) => {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({ uploadDir: './public/share/' });
    //上传完成后处理
    form.parse(req, function (err, fields, files) {
        console.log("files: ", files);
        console.log("fields: ", fields);
        // console.log(fields.user[0])
        var filesTmp = JSON.stringify(files, null, 2);
        var phone = fields.phone[0];
        var content = fields.content[0];
        var time =fields.time[0];
        if (err) {
            console.log('parse error: ' + err);
        } else {
            // var inputFile = files.file[0];
            var inputFile = files.image[0];
            var uploadedPath = inputFile.path;
            var extname = path.extname(inputFile.originalFilename)
            var dstPath = './public/share/' + phone + time + extname;
            //重命名为真实文件名

            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                    console.log('rename error: ' + err);
                } else {
                    console.log('rename ok');
                }
            });
            api.save(Share, {
                phone: phone,
                content: content,
                image: phone + time + extname,
                time: time
            })
        }

        response.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
        response.write('received upload:\n\n');
        response.end(JSON.stringify({ status: 200, msg: "上传头像成功" }));
    })
});

module.exports = router;