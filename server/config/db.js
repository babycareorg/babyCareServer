var config = require('./develop');
var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://127.0.0.1:27017/babyCare", err => {
    if (err) {
        console.log('连接失败')
        console.log(err);
    } else {
        console.log('连接成功')
    }
});

module.exports = db;