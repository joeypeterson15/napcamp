const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async function(req, res) {
    const list = await Spot.findAll();
    res.json(list)
}))



module.exports = router;
