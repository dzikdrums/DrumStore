const Order = require('../models/order.model');

// get all orders

exports.getOrders = async (req, res) => {
  try {
    res.status(200).json(await Order.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete all orders

exports.deleteOrders = async (req, res) => {
  try {
    res.status(200).json(await Order.remove({}));
  } catch (err) {
    res.status(500).json(err);
  }
};

//add new order

exports.addOrder = async (req, res) => {
  try {
    await Order.create(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
};
