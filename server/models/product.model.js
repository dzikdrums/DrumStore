const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  id: { type: "String", required: true },
  tag: { type: "String", required: false },
  img: { type: "Object", required: true },
  name: { type: "String", required: true },
  price: { type: "Number", required: true },
  desc: { type: "String", required: true },
  qty: { type: "Number", required: true }
});

module.exports = mongoose.model("Product", Product);
