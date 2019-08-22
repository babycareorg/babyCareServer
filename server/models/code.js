var mongoose = require("mongoose");

var CodeSchema = new mongoose.Schema({
    email: String,
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