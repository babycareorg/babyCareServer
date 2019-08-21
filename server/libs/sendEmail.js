var nodemailer = require("nodemailer")
var config = require('../config/develop')

var sendMail = (email, code) => {
    let toemail = email;

    var transporter = nodemailer.createTransport(config.mailconfig);
    transporter.sendMail({
                from: "babyCare <2586534184@qq.com>", //发信邮箱
                to: toemail, //接收者邮箱
                subject: "babyCare邮箱验证码", //邮件主题
                text: "您好！欢迎使用babyCare！",
                html: "您注册的babyCare验证码为："+code,
    },(err, info) =>{
        if(err){
            return console.log(err);
        }
        console.log('Message sent: %s', info.messageId);
    })
}


module.exports = sendMail;