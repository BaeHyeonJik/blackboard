const express = require('express');
const path = require('path');
const db = require('../../db/db');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('professor/makenewlecture');
});

router.post('/', async (req, res) => {
  const {title, limitednum, credit} = req.body
  var sql = 'INSERT INTO Lectures (title, limitednum, professor, credit) VALUES(?, ?, ?, ?)';
  var params = [title, limitednum, req.session.user.name, credit];
  db.query(sql, params, function(err, rows, fields){
      if(err){
          console.log(err);
          res.status(500).send('강의명이 중복');
      } else {
          console.log(rows.insertId);
          res.redirect('/professor');
      }
  });
}
  
);

module.exports = router;