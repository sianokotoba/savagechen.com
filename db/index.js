'use strict'
const debug = require('debug')('sql');
const chalk = require('chalk');
// const db = require('../db');
const Sequelize = require('sequelize');

// const DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;

const name = (process.env.DATABASE_NAME || 'savage-chen');

const url = process.env.DATABASE_URL || `postgres://localhost:5432/${name}`;

console.log(chalk.yellow(`Hello, Opening database connection to ${url}`));


// create the database instance
const db = module.exports = new Sequelize(url, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  // native: true // lets Sequelize know we can use pg-native for ~30% more speed
});

// pull in our models
require('../db/models');

// sync the db, creating it if necessary
function sync(force = false) {
  return db.sync({ force })
    .then(ok => console.log(chalk.green(`Synced models to db ${url}`)))
    .catch(fail => {
      console.error(chalk.red('Failed db sync' + fail));
      // Otherwise, do this autocreate nonsense
      console.log(`Creating database ${name}...`);
      return new Promise((resolve, reject) =>
      require('child_process').exec(`createdb "${name}"`, resolve)
    ).then(() => db.sync({ force: true }));
    });
}

db.didSync = sync();

