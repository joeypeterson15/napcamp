const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async function(req, res) {
    const list = await Spot.findAll();
    res.json(list)
}))

router.get('/:location', asyncHandler(async function(req, res) {
    let newLocation = req.params.location.charAt(0).toUpperCase() + req.params.location.slice(1)
    // console.log('new location', newLocation)
    const locations = await Spot.findAll({where : {
        location : newLocation
    }})
    res.json(locations)
}))



module.exports = router;
