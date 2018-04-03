/**
 * Import Dependency
 */
import mongodb from 'mongodb'

/**
 * Declare Variables
 */
let MongoClient = mongodb.MongoClient
let state = {
    db: null
}

/**
 * Export
 */
exports.connectDatabase = function(connection, done) {
    if (state.db) {
        return done()
    }
    MongoClient.connect(connection.url, function(err, client) {
        if (err) {
            return done(err)
        }
        let _db = client.db(connection.database)
        state.db = _db
        done()
    })
}

exports.getDatabase = function() {
    return state.db
}

exports.closeDatabase = function(done) {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}

exports.checkCollectionExist = function() {
    if (state.db) {
        state.db.collection('users').find().toArray(function(err, result) {
            if (err) throw err
            console.log(result)
        })
    } else {
        console.log('err')
    }
}
