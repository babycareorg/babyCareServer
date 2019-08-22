var config = require("../config/develop")

var QcloudSms = require("qcloudsms_js");

// 短信应用SDK AppID
var appid = config.QcloudSms.appid;  // SDK AppID是1400开头

// 短信应用SDK AppKey
var appkey = config.QcloudSms.appkey;

// 需要发送短信的手机号码
// var phoneNumbers = ["填写手机号"];

// 短信模板ID，需要在短信应用中申请
var templateId = 242762;  // NOTE: 这里的模板ID`242762`只是一个示例，真实的模板ID需要在短信控制台中申请

// 签名
// var SmsSign = "bgbskcn";  // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`

// 实例化QcloudSms
var qcloudsms = QcloudSms(appid, appkey);

// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
// function callback(err, res, resData) {
//     if (err) {
//         console.log("err: ", err);
//     } else {
//         console.log("request data: ", res.req);
//         console.log("response data: ", resData);
//     }
// }
// //生成5位验证码
// function RndNum(n) {
//     var rnd = "";
//     for (var i = 0; i < n; i++)
//         rnd += Math.floor(Math.random() * 10);
//     return rnd;
// }
// var VerificationCode = RndNum(5);
// console.log(VerificationCode);
// //设置定期器
// const countDown = (second) => {
//     const s = second % 60;
//     const m = Math.floor(second / 60);

//     return `${`00${m}`.slice(-2)} : ${`00${s}`.slice(-2)}`;
// };

// let time = 5 * 60;

// const timer = setInterval(() => {
//     const show = countDown(time--);
//     //console.log(show);
//     if (time < 0) {
//         console.log('倒计时结束！');
//         VerificationCode = -1;
//         console.log(VerificationCode);
//         clearInterval(timer);
//     }
// }, 1000);

var ssender = qcloudsms.SmsSingleSender();
// var params = [VerificationCode, "5", "156221848"];
// ssender.sendWithParam(86, phoneNumbers[0], templateId, params, SmsSign, "", "", callback);  // 签名参数未提供或者为空时，会使用默认签名发送短信


module.exports = ssender

// module.exports = (temID, phoneNum, params) => {
//     ssender.sendWithParam("86", phoneNum[0], temID, params, config.QcloudSms.signature, (err, res, resData) => {
//         if (err) {
//             console.log("err: ", err);
//         } else {
//             console.log("request data: ", res.req);
//             console.log("response data: ", resData);
//         }
//     })
// }