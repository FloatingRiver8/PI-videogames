
const {Router} = require('express')
const express = require('express')
const {Videogames, Genres } = require('../db')
const {getApiInfo} = require('./utils/controllers')


const router = Router();
router.use(express.json());

router.get('/', async (req ,res) =>{

const allVideogames = await getApiInfo()

    res.status(200).send(allVideogames)
    console.log(allVideogames)
})

module.exports = router;