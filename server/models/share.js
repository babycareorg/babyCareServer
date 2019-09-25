var mongoose = require('mongoose');

var ShareSchema = new mongoose.Schema({
    phone: String,
    image: String,
    content: String,
    time: String
},
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        }
    }
)

var ShareModel = mongoose.model('share', ShareSchema);

module.exports = ShareModel;