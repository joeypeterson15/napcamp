const express = require('express');
const asyncHandler = require('express-async-handler');
const { Save } = require('../../db/models')

const router = express.Router()

router.get('/:id', asyncHandler(async function(req, res) {
    const saves = await Save.findAll({where: {
        userId : req.params.id
    }});
    res.json(saves)
}))

router.post('/:id', asyncHandler(async function(req, res) {
    const save = await Save.create(req.body);
    res.json(save)
}))

router.delete('/:id/:spotId', asyncHandler(async function(req, res) {
    const save = await Save.findOne({where:
        {userId : req.params.id,
        spotId : req.params.spotId}
    })

    await save.destroy();
    const saves = await Save.findAll({where: {
        userId : req.params.id
    }})
    res.json({saves,  id : save.id })
}))


module.exports = router;
