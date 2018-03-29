/**
 * Import Dependency
 */
import passport from 'passport'
import passportBearer from 'passport-http-bearer'

/**
 * Import Models
 */
import User from '../models/mongodb/users/index.js'

/**
 * Declare Variables
 */
let BearerStragtegy = passportBearer.Strategy

/**
 * Export
 */
exports.findUserByToken = function() {
    console.log('2')
    passport.use(new BearerStragtegy(function(token, cb) {
        console.log('3')
        console.log(token + ' [passport.js]')
        User.findByToken(token, function(err, user) {
            if (err) {
                return cb(err)
            }
            if (!user) {
                return cb(null, false)
            }
            console.log('5')
            console.log(user)
            return cb(null, user)
        })
    }))
}
