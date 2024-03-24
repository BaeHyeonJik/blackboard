const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'register.html'));

});

router.post('/', (req, res) => {
    const {id, password, name, num, userclass} = req.body
    if(id == '' || password == '' || name == '' || num == '' || userclass == null){
        res.status(400).send({ error: '빈 칸을 채워주세요.' });
    }else{
        var sql = 'INSERT INTO Users (id, password, name, num, userclass) VALUES(?, ?, ?, ?, ?)';
        var params = [id, password, name, num, userclass];
        db.query(sql, params, function(err, rows, fields){
            if(err){
                console.log(err);
                res.status(500).send('아이디 중복');
            } else {
                console.log(rows.insertId);
                res.redirect('/login');
            }
        });
    } 
});

module.exports = router;