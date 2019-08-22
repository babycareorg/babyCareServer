var QcloudSms = require("qcloudsms_js");
var config = require("../config/develop")

var qcloudsms = QcloudSms(config.QcloudSms.appid, config.QcloudSms.appkey)

var ssender = qcloudsms.SmsSingleSender();

function callback(err, res, resData) {
    if (err) {
        console.log("err: ", err);
    } else {
        console.log("request data: ", res.req);
        console.log("response data: ", resData);
    }
}

module.exports = (temID, phoneNum, params) => {
    ssender.sendWithParam("86", phoneNum, temID, params, config.QcloudSms.signature, callback)
}