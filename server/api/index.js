'use strict';

const db = require('../../db');
const api = module.exports = require('express').Router();
const guestsRouter = require('./guests');

// API Endpoint Routes
api.use('/guests', guestsRouter);

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
