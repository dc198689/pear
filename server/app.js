/**
 * Import Dependency
 */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'
import passportBearer from 'passport-http-bearer'
import logger from 'morgan'
import fs from 'fs'
import path from 'path'

/**
 * Declare Variables
 */
let app = express()
let logStream = fs.createWriteStream(path.join(__dirname, 'stream.log'), {flags: 'a'})
let port = process.env.PORT || 4400
let BearerStragtegy = passportBearer.Strategy

/**
 * Import Others
 */
import controllers from './controllers'
import database from './db'

/**
 * Global Config
 */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(controllers)
app.use(logger('short', {stream: logStream}))

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
