const { urlencoded } = require('express');
const express = require('express');
require('dotenv').config()
const app = express();
const morgan = require('morgan');
const task = require('./route/task3')

app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(morgan('tiny'));

app.use('/api/upcloud/users', task);


module.exports = app;