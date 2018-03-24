'use strict'

const db = require('../../db/models');
const Guest = db.Guest;
const MainGuest = db.MainGuest;
const router = module.exports = require('express').Router();

/*----------  ALL ATTENDING GUESTS  ----------*/
/*----------  GET /guests  ----------*/
router.get('/', (req, res, next) => {
  Guest.findAll()
    .then(guests => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", guests);
      res.json(guests);
    })
    .catch(next);
})

/*----------  CREATE ONE MAIN GUEST  ----------*/
/*----------  POST /guests  ----------*/
router.post('/', (req, res, next) => {
  MainGuest.create(req.body)
  .then(main => {
    console.log("Are you correct?", main)
    res.status(201).json(main)
  })
  .catch(next);
})
// router.get('/:orderId', (req, res, next) => {
//   Order.findOne({
//       where: {id: +req.params.orderId},
//       include: [
//        {model: OrderItem, include: [Product]}
//       ]
//       })
//     .then(orders => {
//       console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", orders);
//       res.json(orders);
//     })
//     .catch(next);
// })



// router.post('/:id', (req, res, next) => {
//   OrderItem.create(req.body)
//   .then( orderIt => res.status(201).json(orderIt))
//   .catch(next);
// })

// // make a post to /orders
// // make post to /orders/id
// /*----------  SINGLE ORDERS  ----------*/
