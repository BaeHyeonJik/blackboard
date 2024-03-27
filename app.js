const express = require('express')
const cors = require('cors')
const path = require('path');
const session = require('express-session')



const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const gobackRouter = require('./routes/goback');
const registerRouter = require('./routes/register');
const professorRouter = require('./routes/professor');
const studentRouter = require('./routes/student');


const makenewlectureRouter = require('./routes/professor/makenewlecture');
const proflectureRouter = require('./routes/professor/proflecture');
const proflecturepostRouter = require('./routes/professor/proflecturepost');

const app = express()
const PORT = 3000;

app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'hyeonjik',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use("/login", loginRouter)
app.use("/logout", logoutRouter)
app.use("/goback", gobackRouter)
app.use("/register", registerRouter)
app.use("/professor", professorRouter)
app.use("/student", studentRouter)

app.use("/professor/makenewlecture", makenewlectureRouter)
app.use("/professor/proflecture", proflectureRouter)
app.use("/professor/proflecturepost", proflecturepostRouter)

app.get('/', (req, res) => {
  res.render('homepage');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
