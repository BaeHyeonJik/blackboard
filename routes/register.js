const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();


router.post('/', (req, res) => {
    const {id, password, name, num, userclass} = req.body
    console.log(id, password)
    if(id == '' || password == '' || name == '' || num == '' || userclass == null){
        console.log('hi')
        res.render('register', {error : 1});
    }else{
        var sql = 'INSERT INTO Users (id, password, name, num, userclass) VALUES(?, ?, ?, ?, ?)';
        var params = [id, password, name, num, userclass];
        db.query(sql, params, function(err, rows, fields){
            if(err){
                console.log(err);
                res.render('register', { error : 2});
            } else {
                console.log(rows.insertId);
                res.redirect('/login');
            }
        });
    }
});

module.exports = router;