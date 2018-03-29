/**
 * Import Dependency
 */
import express from 'express'

/**
 * Import Others
 */
import auth from './auth/index.js'

/**
 * Declare Variables
 */
let router = express.Router()

/**
 * Router Config
 */
router.use('/auth', auth)

router.get('/', function(req, res) {
    res.render('Middleware Index')
})

module.exports = router
