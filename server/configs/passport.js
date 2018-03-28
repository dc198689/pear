/**
 * Import Dependency
 */
import passport from 'passport'
import passportBearer from 'passport-http-bearer'

/**
 * Import Others
 */
import database from './mongodb.js'

/**
 * Declare Variables
 */
let BearerStragtegy = passportBearer.Strategy

/**
 * Export
 */
export default function() {
    passport.use(new BearerStragtegy(function(token, cb) {
        database.users.findByToken(token, function(err, user) {
            if (err) {
                return cb(err)
            }
            if (!user) {
                return cb(null, false)
            }
            console.log(user)
            return cb(null, user)
        })
    }))
}
