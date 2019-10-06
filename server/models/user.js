var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    imgUrl: String,
    mobilePhone: String,
    emergency: String,
    qq: String,
    babys: [
        {
            name: String,
            birthday: String,
            sex: String,
            h_w: [
                {
                    height: String,
                    weight: String,
                    time: String
                }
            ]
        },
        {
            timestamps: {
                createdAt: 'created',
                updatedAt: 'updated'
            }
        }
    ],
    olds: [
        {
            name: String,
            birthday: String,
            sex: String,
            phone: String
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