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
    MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
        if (err) {
            return done(err)
        }
        let _db = client.db('pear')
        state.db = _db
        done()
    })
}

exports.getDatabase = function() {
    console.log('Current Db ' + state.db)
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
