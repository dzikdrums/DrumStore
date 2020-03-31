const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller');

// get all orders
router.route('/orders').get(OrderController.getOrders);

//add new order
router.route('/orders').post(OrderController.addOrder);

//add new order
router.route('/orders').delete(OrderController.deleteOrders);

module.exports = router;
