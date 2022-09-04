const movieModel = require('../models/movieModel')
const validate = require('../validation/validation')


//-------------------------------create Movie------------------------------------

const createMovie = async function (req,res) {
    try {
        const requestBody = req.body
    
        let { movie,language,realeasedYear,genres} = requestBody
        if (!validate.isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, msg: 'please provide request body' })
        }
        if (!validate.isValid(movie)) {
            return res.status(400).send({ status: false, mag: 'please provide title' })
        }
        if (!validate.isValid(language)) {
            return res.status(400).send({ status: false, msg: 'pls provide  language' })
        }
        if (!validate.isValid(realeasedYear)) {
            return res.status(400).send({ status: false, msg: 'pls provide realeasedYear' })
        }
       
        if (!validate.isValid(genres)) {
            return res.status(400).send({ status: false, msg: 'pls provide genres' })
        }
       
        
        let createData = await movieModel.create()
       return res.status(201).send({ status: true, msg: 'movie created succsesfully', data: createData })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.msg })
    }
}

module.exports = {createMovie}
