/**
 * Import Dependency
 */
import database from '../../../configs/mongodb.js'

/**
 * Declare Variables
 */
let _database = database.getDatabase()
if (_database !== null) {
    let collection = _database.collection('users')
}

/**
 * Export
 */
exports.all = function(cb) {
    if (_database !== null) {
        collection.find().toArray(function(err, data) {
            console.log(data)
            cb(err, data)
        })
    }
}

exports.findByToken = function(token, cb) {
    if (_database !== null) {
        collection.find({
            'token': token
        }, function(err, data) {
            console.log(data)
            cb(err, data)
        })
    }
}