const express = require('express');
const router = express.Router();
const eventsCrtl = require('../../controllers/events')

router.get('/getall', checkAuth, eventsCrtl.getEvents)

// auth middlewear
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'No logged in user'})
}

module.exports = router;