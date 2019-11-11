const express = require('express');
const app = express();
const cors = require('cors');


// settings
app.set('port', process.env.port ||  4000 );

// middlewares
app.use(cors());
app.use(express.json());

// routes

module.exports = app;