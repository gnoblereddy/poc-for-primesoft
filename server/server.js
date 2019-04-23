var express = require('express');
var webpack = require('webpack');
var mongoose = require('mongoose');
var path = require('path');
var app = new express();
var bodyParser = require('body-parser');
var routes = require('./routes');
var config = require('../webpack.config');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/react_app');

// app.all('/*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });


app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes);

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../index.html'))
})




app.listen(8000, function (err, response) {
    if (err)
        throw err;
    else
        console.log('Application is running at port 8000')
})