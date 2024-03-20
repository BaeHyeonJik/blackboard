const express = require('express')
const cors = require('cors')

const loginRouter = require('./routes/login');

const app = express()
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", loginRouter)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
