/**
 * Import Dependency
 */
import express from 'express'
import passport from 'passport'

/**
 * Import Others
 */
import database from '../../configs/mongodb.js'

/**
 * Declare Variables
 */
let router = express.Router()

/**
 * Router Config
 */
router.post('/',
    passport.authenticate('bearer', { session: false }), function(req, res) {
        console.log('Come Test')
        console.log(req.body)
        console.log(database.get().collection('pear'))
        res.json({
            username: req.user.username,
            email: req.user.emails[0].value
        })
    })

module.exports = router
