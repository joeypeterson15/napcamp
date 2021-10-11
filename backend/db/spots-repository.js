const { spot } = require("./models")

async function list() {
    return await spot.findAll()
}

module.exports = {
    list
}
