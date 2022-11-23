const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes

app.use(require('./routes/tasks'));

app.get('/', (req, res) => res.send('Welcome to API Tasks!'))
app.listen(port, () => console.log("listening"))