var express = require('express');
var router = express.Router();

var Share = require("../models/share");

router.get('/', (req, response, next) => {
    let id = req.query.id;

    Share.deleteOne({ _id: id }, (err, res) => {
        if (err) {
            response.send(JSON.stringify({ status: 402, msg: "删除出错", error: err }));
        } else {
            console.log(res)
            if (res.ok == 1) {
                response.send(JSON.stringify({ status: 200, msg: "删除成功" }));                
            } else {
                response.send(JSON.stringify({ status: 402, msg: "删除出错"}));
            }
        }
    })
})



module.exports = router;