const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

router.post('/', (req, res) => {
  const {id, password} = req.body
  console.log(id, password)
  res.redirect('/login')
});



module.exports = router;