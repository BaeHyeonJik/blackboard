const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('student/student');
  });

module.exports = router;