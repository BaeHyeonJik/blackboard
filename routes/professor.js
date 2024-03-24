const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/professor', 'professor.html'));
});
router.post('/', (req, res) => {
   const {list} = req.body
   if(list == '새로운강의등록'){
    res.redirect('/professor/makenewlecture')
   }else if(list == '강의조희'){
    res.redirect('/professor/proflecture')
   }
});
module.exports = router;