const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'blackboard'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류: ', err);
    throw err;
  }
  console.log('MySQL에 성공적으로 연결되었습니다.');
});
module.exports = db;