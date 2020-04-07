const Product = require('../models/product.model');

// get product by category

exports.getProduct = async (req, res) => {
  try {
    res.status(200).json(await Product.find({ category: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};

//get single product

exports.getSingleProduct = async (req, res) => {
  try {
    res.status(200).json(await Product.find({ id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete all products

exports.deleteAllProducts = async (req, res) => {
  try {
    res.status(200).json(await Product.remove({}));
  } catch (err) {
    res.status(500).json(err);
  }
};

//add comment to product

exports.addComment = async (req, res) => {
  try {
    const product = await Product.find({ id: req.params.id });
    product[0].comments.push(req.body);
    const productSaved = await product[0].save();
    res.send(productSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};
