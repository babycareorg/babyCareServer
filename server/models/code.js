var mongoose = require("mongoose");

var CodeSchema = new mongoose.Schema({
    email: String,
    code: String
})

var CodeModel = mongoose.model("code", CodeSchema);

module.exports = CodeModel;