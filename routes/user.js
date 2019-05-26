var express = require('express')
var Service = require('../service/user')
var apiHelper = require('../utils/apiHelper')
    // var path = require('path')

function getAll(req, res) {
    let promise = Service.getAll()
    apiHelper.handle(res, promise)
}

function getOne(req, res) {
    let promise = Service.getOne(req.params.id)
    apiHelper.handle(res, promise)
}

function add(req, res) {
    console.log(req.body)
    let promise = Service.add(req.body)
    apiHelper.handle(res, promise)
}

function update(req, res) {
    var id = req.params.id
    let promise = Service.update(id, req.body)
    apiHelper.handle(res, promise)
}

function remove(req, res) {
    var id = req.params.id
    let promise = Service.remove(id)
    apiHelper.handle(res, promise)
}

var router = express.Router()

router.get('/usuarios', getAll)
router.post('/usuarios', add)
router.get('/usuarios/:id', getOne)
router.put('/usuarios/:id', update)
router.delete('/usuarios/:id', remove)

module.exports = router