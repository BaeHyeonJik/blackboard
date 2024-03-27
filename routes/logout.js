const express = require('express');
const path = require('path');
const router = express.Router();


router.post('/', (req, res) => {
    delete req.session.id;
    delete req.session.name;
    delete req.session.num;
    res.redirect('login');
});

module.exports = router;