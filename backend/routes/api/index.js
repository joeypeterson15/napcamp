const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const reviewsRouter = require('./reviews.js')
const bookingsRouter = require('./bookings.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

const spotsRouter = require("./spots.js");
router.use("/spots", spotsRouter)
router.use("/reviews", reviewsRouter)
router.use("/bookings", bookingsRouter)



module.exports = router;
