const express = require('express');
const db = require('../db/db');
const router = express.Router();


router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM Lectures Where professor = ?';
    const params = [req.session.user.id]
    db.query(sql, params, function(err, rows, fields) {
        if (err) {
          console.error(err);
          res.status(500).send('서버 오류가 발생했습니다.');
        } else {
          if (rows.length > 0) {
            console.log(rows)
          } else {
            console.log('로그인 실패: 아이디 또는 비밀번호가 일치하지 않음');
          }
        }
    });
});

module.exports = router;