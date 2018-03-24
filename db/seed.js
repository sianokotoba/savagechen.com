'use strict';

const db = require('../db');
const Promise = require('bluebird');

// Hardcoded seed for testing
const guests = [{
  firstName: 'Jane',
  lastName: 'Smith'
}, {
  firstName: 'John',
  lastName: 'Smith'
}, {
  firstName: 'Neo',
  lastName: 'Smith'
}]

const mainGuests = [{
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane@smith.com',
  address1: 'Jane Road',
  address2: 'Apt #2',
  city: 'Morris',
  state: 'NJ',
  zipCode: '07777',
  phone: '1234567890',
  guestId: 1,
  attending: 'yes'
}, {
  firstName: 'Neo',
  lastName: 'Smith',
  email: 'neo@smith.com',
  address1: 'Neo Avenue',
  address2: '',
  city: 'Matrix',
  state: 'NJ',
  zipCode: '11237',
  phone: '3216549870',
  guestId: 3,
  attending: 'yes'
}, {
  firstName: 'Seeya',
  lastName: 'Later',
  email: 'seeya@later.com',
  phone: '1112223333',
  attending: 'no'
}]

const guestCounts = [{
  totalCount: 1,
  mainGuestId: 1,
  guestId: 1
}, {
  totalCount: 2,
  mainGuestId: 2,
  guestId: 2,
}, {
  totalCount: 3,
  mainGuestId: 2,
  guestId: 3
}]

// seed functions
const seedGuests = () => {
  return db.Promise.each(guests, (guest) => {
    return db.model('guest').create(guest)
  }
)};
const seedMainGuests = () => db.Promise.each(mainGuests, mainGuest => db.model('mainGuest').create(mainGuest));
const seedGuestsCounts = () => db.Promise.each(guestCounts, guestCount => db.model('guestCount').create(guestCount));


db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedGuests)
  .then(guests => console.log(`Seeded ${guests.length} users OK`))
  .then(seedMainGuests)
  .then(mainGuests => console.log(`Seeded ${mainGuests.length} projects OK`))
  .then(seedGuestsCounts)
  .then(guestCount => console.log(`Seeded ${guestCount.length} files OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
