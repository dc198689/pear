/**
 * Import Dependency
 */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

/**
 * Declare Variables
 */
let app = express()
let port = process.env.PORT || 4400
const url = 'mongodb://localhost:27017'
const database = 'pear'

/**
 * Import Others (Global)
 */
import mongodb from './configs/mongodb.js'
import passport from './configs/passport.js'
import controllers from './controllers'

/**
 * Global Config
 */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(controllers)

/**
 * Start
 */
mongodb.connectDatabase(`${url}/${database}`, function(err) {
    if (err) {
        console.log(`Unable to connect to ${database}`)
        process.exit(1)
    } else {
        console.log('1')
        // mongodb.checkCollectionExist()
        passport.findUserByToken()
        app.listen(port, function() {
            console.log('Listening on port : ' + port)
        })
    }
})
