const { firebaseObject } = require('../../secrets');
console.log("FILE HIT")

$(document).ready(() => {
  // Initialize Firebase
  console.log("Initializing firebase...");
  var config = {
    apiKey: firebaseObject.apiKey,
    authDomain: firebaseObject.authDomain,
    databaseURL: firebaseObject.databaseURL,
    projectId: firebaseObject.projectId,
    storageBucket: firebaseObject.storageBucket,
    messagingSenderId: firebaseObject.messagingSenderId
  };
  firebase.initializeApp(config);
});
