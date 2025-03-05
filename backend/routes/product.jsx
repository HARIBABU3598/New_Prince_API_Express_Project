const express = require("express");//importing express to create the router
const {
  getProducts,
  getSingleProduct,
} = require("../controllers/productController.jsx");//importing the logics from controllers
const router = express.Router();//group related routes

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;//exporting modules
