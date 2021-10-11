
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
    console.log('YAYAYAYAAYA')
    const reviews = await Review.findAll({where: {
        spotId : req.params.id
    }});
    res.json(reviews)
}))

//adding a review
router.post('/:id', asyncHandler(async function(req, res) {
    console.log('hellllooooo')
    const review = await Review.create(req.body);
    return res.redirect(`${req.baseUrl}/${review.spotId}`)
}))


module.exports = router;
