const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll()
    console.log("I am here.")
    return res.json(reviews)
}))

router.post('/', asyncHandler(async (req,res) => {
    const review = await Review.create(req.body);
    // return res.json(await Review.findByPk(reviewId))
    return res.json(review)
}))

router.delete('/', asyncHandler(async (req, res) => {
    const review = await Review.findByPk(+req.body.review_id)
    return res.json(reviews)
}))


module.exports = router