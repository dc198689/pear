/**
 * Import Dependency
 */
import express from 'express'

/**
 * Declare Variables
 */
let router = express.Router()

/**
 * Router Config
 */
router.use('/auth', require('./auth/index.js'))

router.get('/', function(req, res) {
    res.render('Middleware Index')
})

module.exports = router
