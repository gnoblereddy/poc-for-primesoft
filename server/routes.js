var express = require('express');
var router = express.Router();
var db = require('./models/userSchema');
var mongoose = require('mongoose');
var Response = require('./commons/response');
var Promise = require('promise');

router.post('/signup', function (req, res) {
    var promise = new Promise(function (resolve, reject) {
        db.findOne({ email: req.body.email }, function (err, res) {
            if (err) reject(err);
            else resolve({ res, status: true });
        });
    });
    promise.then(function (data) {
        if (data.res == null) {
            let db1 = new db(req.body);
            db1.save(function (err, data) {
                if (err) {
                    Response.errorResponse(err.message, res);
                } else {
                    return res.status(200).json({ result: data, message: 'User registered successfully!', success: 1, statusCode: 200, status: true });
                }
            })
        } else if (data.res != null) {
            const respone = { data, statusCode: 404 };
            return res.status(200).json({ result: respone, message: 'User Already Exists', success: 1, statusCode: 404, status: true })
        }
    }, function (err) {
        console.log("Something broke ---------");
    });

})

router.post('/login', function (req, res, next) {
    var email = req.body.username;
    var password = req.body.password;

    db.findOne({ email: email, password: password },
        function (err, data) {
            if (err) {
                Response.errorResponse(err.message, res);
            }
            if (!data) {
                Response.notFoundResponse('Invalid Email Id or Password!', res);
            }
            else {
                return res.status(200).json({ result: data, message: 'User loggedin successfully!', success: 1, statusCode: 200, status: true });
            }
        }
    )
})

module.exports = router;