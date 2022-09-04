const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController.js')
router.post('/add-movie', movieController.createMovie)
module.exports = router