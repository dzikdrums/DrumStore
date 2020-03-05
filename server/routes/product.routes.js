const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product.controller");

// get products by category
router.route("/products/category/:id").get(ProductController.getProduct);

//get single product
router.route("/product/:id").get(ProductController.getSingleProduct);

module.exports = router;
