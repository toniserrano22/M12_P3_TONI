require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ROUTES

app.use(require('./routes/index'));

// DDBB
mongoose.connect(process.env.MONGODB_CNN,{useUnifiedTopology: true, useNewUrlParser: true},(err,res) => {
    if(err) throw err;
    console.log(`Base de datos ${res.connections[0].name} online, port: ${res.connections[0].port}`);
})

app.listen(process.env.PORT,() => {
    console.log(`http://localhost:${process.env.PORT}`);
})