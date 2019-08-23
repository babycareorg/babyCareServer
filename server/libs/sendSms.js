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

var ssender = qcloudsms.SmsSingleSender();


module.exports = ssender