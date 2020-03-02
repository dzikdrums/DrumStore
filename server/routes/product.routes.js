const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product.controller");

// get all posts
router.route("/products").get(ProductController.getProduct);

//get single product
router.route("/product/:id").get(ProductController.getSingleProduct);

// get products by range
// router
//   .route("/products/range/:startAt/:limit")
//   .get(ProductController.getProductsByRange);

module.exports = router;
