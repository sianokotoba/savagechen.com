'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');

const GuestCount = db.define('guestCount', {
  totalCount: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = GuestCount;
