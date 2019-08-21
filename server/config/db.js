var config = require('./develop');
var mongoose = require('mongoose');
var db = mongoose.connect(config.mongodb);

module.exports = db;