const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  const {id, password} = req.body
  const params = [id, password]
  const sql = 'SELECT * FROM Users WHERE id = ? AND password = ?';
  db.query(sql, params, function(err, rows, fields) {
    if (err) {
      console.error(err);
      res.render('login');
    } else {
      if (rows.length > 0) {
        console.log('로그인 성공:', id);
        req.session.user = {id: rows[0].id, name : rows[0].name, num : rows[0].num};
        if(rows[0].userclass == 'student'){
          res.redirect('/student')
        }else{
          res.redirect('/professor')
        }
      } else {
        console.log('로그인 실패: 아이디 또는 비밀번호가 일치하지 않음');
        res.redirect('/login');
      }
    }
  });
});

module.exports = router;