const express = require('express');
const router = express.Router();


// NOTE ok
router.route('/ok').get(async (req, res) => {
    res.send("Sign API Running. Thank for Check :p");
});


module.exports = router
