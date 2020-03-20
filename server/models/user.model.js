const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  googleID: { type: 'String', required: true },
  username: { type: 'String', required: true },
  thumbnail: { type: 'String', required: false }
});

module.exports = mongoose.model('User', User);
