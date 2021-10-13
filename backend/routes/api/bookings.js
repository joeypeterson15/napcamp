const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../db/models')

const router = express.Router()

router.get('/:id', asyncHandler(async function(req, res) {
    const bookings = await Booking.findAll({where: {
        userId : req.params.id
    }});
    res.json(bookings)
}))

router.post('/:id', asyncHandler(async function(req, res) {
    const booking = await Booking.create(req.body);
    res.json(booking)
}))

router.delete('/:id/:spotId', asyncHandler(async function(req, res) {
    const booking = await Booking.findOne({where:
        {userId : req.params.id,
        spotId : req.params.spotId}
    })

    await booking.destroy();
    const bookings = await Booking.findAll({where: {
        userId : req.params.id
    }})
    res.json({bookings,  id : booking.id })
}))

router.put('/:id/:spotId', asyncHandler(async function(req, res) {
    const booking = await Booking.findOne({ where:
    {
        userId: req.params.id,
        spotId : req.params.spotId
    }})

    await booking.update({ startDate: req.body.startDate, endDate: req.body.endDate, guests: req.body.guests})
    const bookings = await Booking.findAll({where: {
        userId : req.params.id
    }})
    res.json(bookings)
}))


module.exports = router;
