const express = require('express');
const path = require('path');
const router = express.Router();


router.post('/', (req, res) => {
    const {back} = req.body
    if(back == 'login'){
        res.redirect('/login')
    }else if(back == 'professor'){
        res.redirect('/professor')
    }
});

module.exports = router;