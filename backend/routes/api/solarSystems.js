const express = require('express');
const asyncHandler = require('express-async-handler');
const { Solar_System } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const solarSystem = await Solar_System.findAll()
    console.log("I am here.")
    return res.json(solarSystem)
}))


module.exports = router