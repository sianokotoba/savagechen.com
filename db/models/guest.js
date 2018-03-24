'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');

const Guest = db.define('guest', {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
}, {
  hooks: {
  },
  instanceMethods: {

  },
  classMethods: {

  }
});

module.exports = Guest;
