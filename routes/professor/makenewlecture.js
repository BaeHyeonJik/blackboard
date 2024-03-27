const express = require('express');
const path = require('path');
const db = require('../../db/db');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('professor/makenewlecture')
});

router.post('/', async (req, res) => {
  const {title, limitednum, credit} = req.body
  if (title == '' || limitednum == '' || credit == '') {
    console.log('로그인 실패: 채워지지 않은 칸이 있음');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("<script>alert('빈칸을 채워주세요')</script>");
    res.write("<script>window.location=\"makenewlecture\"</script>");
    res.end();
    return;
  }

  var sql = 'INSERT INTO Lectures (title, limitednum, name, credit) VALUES(?, ?, ?, ?)';
  var params = [title, limitednum, req.session.user.name, credit];
  db.query(sql, params, function(err, rows, fields){
      if(err){
        console.log('DB 오류');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write("<script>alert('이미 등록된 강의명입니다')</script>");
        res.write("<script>window.location=\"makenewlecture\"</script>");
        res.end();
      } else {
          console.log(rows.insertId);
          res.redirect('../professor');
      }
  });
}
  
);

module.exports = router;