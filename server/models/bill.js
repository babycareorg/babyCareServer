var mongoose = require('mongoose');

var BillSchema = new mongoose.Schema({
    phone: String,
    date: String,
    price: String,
    title: String
},
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        }
    })

var BillModel = mongoose.model('bill', BillSchema);

module.exports = BillModel;