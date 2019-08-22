var mongoose = require("mongoose");

var CodeSchema = new mongoose.Schema({
    phone: String,
    code: String
},
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        }
    })

var CodeModel = mongoose.model("code", CodeSchema);

module.exports = CodeModel;