'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const resolve = require('path').resolve;
const db = require('../db');

// Middleware to help log debugging
app.use(morgan('dev'));

// Body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from ../public
app.use(express.static(resolve(__dirname, '..', 'public')));
console.log("__DIRNAME?", __dirname)

// Serve our api
app.use('/api', require('./api'));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));

app.listen(PORT, function () {
  console.log('The server is listening closely on port', PORT);
  db.sync()
  .then(function () {
    console.log('Synchronated the database');
  })
  .catch(function (err) {
    console.error('Trouble right here in River City', err, err.stack);
  });
});

