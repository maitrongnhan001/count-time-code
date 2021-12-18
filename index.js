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

app.get('/' , (req , res)=>{
    console.log('hello');
    res.send('Hello');

});

const PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});