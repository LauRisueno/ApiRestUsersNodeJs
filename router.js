var express = require('express')
var path = require('path')

function register(app) {
    app.use('/', require('./routes/user'))
    app.get('/*', (req, res) => {
        res.redirect('/')
    })
}

module.exports = register