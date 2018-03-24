'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

// Require all the models in our database
const Guest = require('./guest');
const MainGuest = require('./mainGuest');
const GuestCount = require('./guestCount');


// Form the associations
MainGuest.belongsToMany(Guest, { through: GuestCount });
Guest.hasOne(MainGuest, { through: GuestCount });


module.exports = {
  Guest,
  MainGuest,
  GuestCount
};
