const express = require('express');
const router = express.Router();


// NOTE ok
router.route('/ok').get(async (req, res) => {
    res.send("API Running. Thank for Check :p");
});

router.use('/sign', require('./sign'))


module.exports = router
