const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

router.post('/', (req, res) => {
  const {id, password} = req.body
  const params = [id, password]
  const sql = 'SELECT * FROM Users WHERE id = ? AND password = ?';
  db.query(sql, params, function(err, rows, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류가 발생했습니다.');
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