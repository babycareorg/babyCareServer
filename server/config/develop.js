module.exports = {
    mongodb: "mongodb://localhost:27017/babyCare",
    mailconfig: {
        service: 'smtp.163.com',
        host: "smtp.163.com",
        secureConnection: true,
        // port: 465,

        // service: 'smtp.163.com',
        // secure: true,
        port: 25,
        auth: {
            user: 'babycare_kfc@163.com',
            pass: 'kfckfckfc123'
        }
    },
    QcloudSms: {
        appid: "1400248083",
        appkey: "d3062e19dd71552e1b6f30fd7269102d",
        signature: "bgbskcn",            //签名
        registerTem: "401924",          //注册模板
        loginTem: "401929"              //登录模板
    }
}