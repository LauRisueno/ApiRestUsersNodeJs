const express = require("express");
const bodyParser = require('body-parser');
var router = require('./router.js');
var mongoose = require('mongoose')
var port = process.env.PORT || 3000

mongoose.Promise = global.Promise

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

mongoose.connect('mongodb://127.0.0.1:27017/users_db', { useNewUrlParser: true });

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port)
});