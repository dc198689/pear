/**
 * Import Dependency
 */
import express from 'express'
import passport from 'passport'

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
        res.json({
            username: req.user.username,
            email: req.user.emails[0].value
        })
    })

module.exports = router
