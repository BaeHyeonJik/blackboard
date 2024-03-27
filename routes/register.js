const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('register');
  });

router.post('/', async(req, res) => {
    const {id, password, name, num, userclass} = req.body
    if(id == '' || password == '' || name == '' || num == '' || userclass == null){
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write("<script>alert('빈칸을 채워주세요')</script>");
        res.write("<script>window.location=\"register\"</script>");
        res.end();
        return;

    }else{
        var sql = 'INSERT INTO Users (id, password, name, num, userclass) VALUES(?, ?, ?, ?, ?)';
        var params = [id, password, name, num, userclass];
        db.query(sql, params, function(err, rows, fields){
            if(err){
                console.log('DB오류')
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.write("<script>alert('아이디가 중복됩니다')</script>");
                res.write("<script>window.location=\"register\"</script>");
                res.end();
                return;
            } else {
                console.log(rows.insertId);
                res.redirect('login');
            }
        });
    }
});

module.exports = router;