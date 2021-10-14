
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models')


// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });
// const requireAuth = (req, res, next) => {
//     if (!res.locals.authenticated) {
//       return res.redirect('/main');
//     }
//     return next();
//   };

// const spotsRepository = require('../../db/spots-repository')

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


module.exports = router;
