var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    imgUrl: String,
    mobilePhone: String,
    babys: [
        {
            name: String,
            birthday: String
        }
    ]
}, {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        }
    })