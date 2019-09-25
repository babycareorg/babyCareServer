var express = require('express');
var router = express.Router();

var Share = require("../models/share")

router.get("/test", (req, response, next) => {
    response.send(JSON.stringify({status:200}))
})

router.get("/", (req, response, next) => {
    let phone = req.query.phone;

    Share.find({ phone: phone }, (err, doc) => {
        if (err) {
            response.send(JSON.stringify({status: 401, msg: err}))
        }
        response.send({
            share: doc
        })
    })

})


module.exports = router;