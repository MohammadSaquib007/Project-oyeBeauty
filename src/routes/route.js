const express = require('express')

const router = express.Router()

const movieController =require('../controllers/movieController')
router.post('/addmovie',movieController.createMovie)
router.get('/getMovie',movieController.movieDetail)
router.get('/get-single/:id',movieController.movieDetailById)
router.get('/list',movieController.detailMovie)

module.exports = router