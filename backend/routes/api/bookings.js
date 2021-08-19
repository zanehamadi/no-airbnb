const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll()
    console.log("I am here.")
    return res.json(bookings)
}));


router.post('/', asyncHandler(async (req,res) => {
    const booking = await Booking.create(req.body);
    return res.json(booking)
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const booking = await Booking.findByPk(req.params.id);
    booking.destroy();
    return res.json({msg:'Booking has been deleted.'})
}))


module.exports = router