const express = require('express');
const path = require('path');
const db = require('../db/db');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async(req, res) => {
  const { id, password } = req.body;
  if (id === '' || password === '') {
    console.log('로그인 실패: 채워지지 않은 칸이 있음');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("<script>alert('빈칸을 채워주세요')</script>");
    res.write("<script>window.location=\"login\"</script>");
    res.end();
    return;
  }

  const sql = 'SELECT * FROM Users WHERE id = ? AND password = ?';
  db.query(sql, [id, password], function(err, rows, fields) {
    if (err) {
      console.error('DB오류');
      res.write("<script>alert('DB 연결 오류')</script>");
      res.write("<script>window.location=\"login\"</script>");
      res.end();
      return;
    } else {
      if (rows.length > 0) {
        console.log('로그인 성공:', id);
        req.session.user = { id: rows[0].id, name: rows[0].name, num: rows[0].num };
        if(rows[0].userclass == 'student'){
          res.redirect('student')
        }else{
          res.redirect('professor')
        }
      } else {
        console.log('로그인 실패: 아이디 혹은 비밀번호가 일치하지 않음');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write("<script>alert('아이디 혹은 비밀번호가 일치하지 않음')</script>");
        res.write("<script>window.location=\"login\"</script>");
        res.end();
        return;
      }
    }
  });
});

module.exports = router;
