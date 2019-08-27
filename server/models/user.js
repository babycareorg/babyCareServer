var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    imgUrl: String,
    mobilePhone: String,
    qq: String,
    babys: [
        {
            name: String,
            birthday: String,
            sex: String
        },
        {
            timestamps: {
                createdAt: 'created',
                updatedAt: 'updated'
            }
        }
    ]
}, {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        }
    })

var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;