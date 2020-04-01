const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
  email: { type: 'String', required: true },
  name: { type: 'String', required: false },
  surname: { type: 'String', required: true },
  company: { type: 'String' },
  postalAddress: { type: 'String', required: true },
  city: { type: 'String', required: true },
  country: { type: 'String', required: true },
  postalCode: { type: 'String' },
  telephone: { type: 'String' },
  paymentMethod: { type: 'String' },
  cart: { type: 'array' },
  totalPrice: { type: 'number' }
});

module.exports = mongoose.model('Order', Order);
