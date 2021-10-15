
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models')

const router = express.Router()



router.get('/:id', asyncHandler(async function(req, res) {
    const reviews = await Review.findAll({where: {
        spotId : req.params.id
    }});
    res.json(reviews)
}))

//adding a review
router.post('/:id', asyncHandler(async function(req, res) {
    const review = await Review.create(req.body);
    res.json(review)
}))

router.delete('/:id/:reviewId', asyncHandler(async function (req, res) {
    const review = await Review.findOne({where: {
        id: req.params.reviewId
    }})

    await review.destroy();
    const reviews = await Review.findAll({where : {
        spotId : req.params.id
    }})
    res.json({ reviews, id : review.id })
}))

router.put('/:spotId/:reviewId', asyncHandler(async function (req, res) {
    const review = await Review.findOne({where: {
        id: req.params.reviewId
    }})
    await review.update({ content: req.body.content})
    const reviews = await Review.findAll({where: {
        spotId: req.params.spotId
    }})
    res.json({ reviews, id: review.id, review })
}))


module.exports = router;
