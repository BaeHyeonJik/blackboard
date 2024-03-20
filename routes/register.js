const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'register.html'));

});

router.post('/', (req, res) => {
    const {id, password, name, num, userclass} = req.body
    var sql = 'INSERT INTO Users (id, password, name, num, class) VALUES(?, ?, ?, ?, ?)';
    var params = [id, password, name, num, userclass];
    console.log(params)
    db.query(sql, params, function(err, rows, fields){
        if(err){
            console.log(err);
        } else {
            console.log(rows.insertId);
        }
    });
    res.redirect('/login');
});

module.exports = router;