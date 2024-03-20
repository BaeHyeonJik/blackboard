const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'register.html'));

});

router.post('/', (req, res) => {
    const {id, password, name, num, userclass} = req.body
    console.log(id, password, name, num, userclass)
    res.redirect('/login');
});

module.exports = router;