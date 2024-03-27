const express = require('express');
const path = require('path');
const db = require('../../db/db');
const router = express.Router();


router.get('/', (req, res) => {
  const sql = 'SELECT * FROM Lectures Where name = ?';
  const params = [req.session.user.name]
  db.query(sql, params, function(err, rows, fields) {
      if (err) {
        console.log('DB오류')
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write("<script>alert('아이디가 중복됩니다')</script>");
        res.write("<script>window.location=\"register\"</script>");
        res.end();
      } else {
        console.log(rows)
        res.render('professor/proflecture', {lectures : rows})

      }
  });
});



module.exports = router;