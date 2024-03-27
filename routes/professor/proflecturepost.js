const express = require('express');
const path = require('path');
const db = require('../../db/db');
const router = express.Router();

router.get('/', (req, res) => {
    const {name, title} = req.query
    res.render('professor/proflecturepost', {name : name, title: title})
});






module.exports = router;