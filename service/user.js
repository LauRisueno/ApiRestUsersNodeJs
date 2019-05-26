var model = require('../models/user')
var MongoRepository = require('../utils/mongoRepository')
var repo = new MongoRepository(model)

var userService = {
    getAll: function() {
        return repo.getAll()
    },
    getOne: function(id) {
        return repo.getOne(id)
    },
    add: function(task) {
        return repo.add(task)
    },
    update: function(id, task) {
        return this.getOne(id).then(() => {
            return repo.update(id, task)
        })
    },
    remove: function(id) {
        return this.getOne(id).then(() => {
            return repo.remove(id)
        })
    }
}

module.exports = userService