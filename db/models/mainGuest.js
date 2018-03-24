'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');

const MainGuest = db.define('mainGuest', {
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
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  phone: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  attending: {
    type: Sequelize.ENUM('yes', 'no'),
    validate: {
      notEmpty: true
    }
  },
  address1: {
    type: Sequelize.STRING
  },
  address2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zipCode: {
    type: Sequelize.STRING
  }
}, {
  hooks: {
  },
  instanceMethods: {

  },
  classMethods: {

  }
});

module.exports = MainGuest;
