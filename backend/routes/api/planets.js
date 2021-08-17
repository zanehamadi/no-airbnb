const express = require('express');
const asyncHandler = require('express-async-handler');
const { Planet } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const planets = await Planet.findAll()
    console.log("I am here.")
    return res.json(planets)
}))


module.exports = router