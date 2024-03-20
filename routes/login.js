const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

router.post('/', (req, res) => {
  const {id, password} = req.body
  const params = [id, password]
  console.log(id, password)
  const sql = 'SELECT * FROM Users WHERE id = ? AND password';
  db.query(sql, params, function(err, rows, fields) {
    console.log(rows)
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류가 발생했습니다.');
    } else {
      if (rows.length > 0) {
        console.log('로그인 성공:', id);
        if(rows.userclass == 'student'){
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