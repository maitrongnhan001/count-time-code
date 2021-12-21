require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser');

const { connect } = require('./config/database.js');
connect();

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require('./routers/user.js');

app.use('/api/user/', userRouter);

app.use('/api/count_time_code/', userRouter);



const PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});