const express = require('express')
const cors = require('cors')
const db = require('./db/db');
const path = require('path');

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const studentRouter = require('./routes/student/student');
const professorRouter = require('./routes/professor/professor');

const app = express()
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", loginRouter)
app.use("/register", registerRouter)
app.use("/student", studentRouter)
app.use("/professor", professorRouter)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'homepage.html'));
});






app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
