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
router.get('/', function(req, res) {
    res.render('Middleware Index')
})

module.exports = router
