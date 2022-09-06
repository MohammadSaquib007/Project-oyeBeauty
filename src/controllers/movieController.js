const movieModel = require('../models/movieModel')
const validate = require('../validation/validation')


//-------------------------------create Movie------------------------------------

const createMovie = async function (req,res) {
    try {
        const requestBody = req.body
    
       let { movie,language,releasedYear,genres} = requestBody
       console.log(requestBody)
        if (!validate.isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, msg: 'please provide request body' })
        }
        if (!validate.isValid(movie)) {
            return res.status(400).send({ status: false, mag: 'please provide title' })
        }
        if (!validate.isValid(language)) {
            return res.status(400).send({ status: false, msg: 'pls provide  language' })
        }
        if (!validate.isValid(releasedYear)) {
            return res.status(400).send({ status: false, msg: 'pls provide realeasedYear' })
        }
       
        if (!validate.isValid(genres)) {
            return res.status(400).send({ status: false, msg: 'pls provide genres' })
        }
        let savedData = requestBody
        console.log(savedData)
        const addingMovie = await movieModel.create(savedData);
        res.status(201).send({ status: true, msg: 'movie adding sucsesfully', data: addingMovie });

    } catch (err) {
        res.status(500).send({ status: false, msg: err.message });
    }
}


//-------------------------------fetch all Detail----------------------------


const movieDetail = async function (req, res) {

    try {
        let gettingMovies = req.params.body
        const getDetails = await movieModel.find()
        return res.status(200).send({ status: true, msg: getDetails })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })

    }
}


//-----------------------movieDetailById-------------------------------

const movieDetailById = async function (req, res) {

    try {
        let getMovies = req.query.id
        const getDetails = await movieModel.findOne({_id:getMovies})
        return res.status(200).send({ status: true, msg: "success" ,data : getDetails })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })

    }
}



//-----------------------------Listing api using pagination-------------------------------


const detailMovie = async function (req, res) {
    try {
      const limitValue = req.query.limit || 10;
      const skipValue = req.query.skip || 0;
      
  
      let movieData = await movieModel.find().limit(limitValue).skip(skipValue);
      if (!movieData) {
        res.status(404).send({ status: false, message: "movie not found" });
      }
      res.status(200).send({ status: true, msg: "success", data: movieData });
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };
  


module.exports.createMovie = createMovie
module.exports.movieDetail = movieDetail
module.exports.movieDetailById = movieDetailById
module.exports.detailMovie=detailMovie

    
