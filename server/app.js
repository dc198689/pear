/**
 * Import Dependency
 */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'
import passportBearer from 'passport-http-bearer'
import logger from 'morgan'

/**
 * Import Others
 */
import controller from './controllers'
import database from './db'

/**
 * Declare Variables
 */
let app = express()
let port = process.env.PORT || 4400
let BearerStragtegy = passportBearer.Strategy

/**
 * Global Config
 */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(controller)
app.use(logger('dev'))
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

/**
 * Start Server
 */
app.listen(port, function() {
    console.log('Listening on port : ' + port)
})
