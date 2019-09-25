var mongoose = require('mongoose');

var BabySchema = new mongoose.Schema({
    parent: String,
    imgUrl: String,
    name: String,
    birthday: String,
    sex: String,
    data: [
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
)

var BabyModel = mongoose.model('baby', BabySchema);

module.exports = BabyModel;