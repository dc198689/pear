/**
 * Import Dependency
 */
import database from '../../../configs/mongodb.js'

/**
 * Export
 */
exports.all = function(cb) {
    if (database.getDatabase() !== null) {
        database.getDatabase().collection('users')
            .find()
            .toArray(function(err, data) {
                console.log(data)
                cb(err, data)
            })
    }
}

exports.findByToken = function(token, cb) {
    console.log(token + ' [models/mongodb/users/index.js]')
    if (database.getDatabase() !== null) {
        console.log('4')
        database.getDatabase().collection('users')
            .findOne({'token': token}, function(err, result) {
                cb(err, result)
            })
    }
}
