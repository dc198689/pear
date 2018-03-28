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
exports.connectDatabase = function(url, done) {
    if (state.db) {
        return done()
    }
    MongoClient.connect(url, function(err, db) {
        if (err) {
            return done(err)
        }
        state.db = db
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
