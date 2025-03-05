const express = require("express");//importing express for router
const { createOrder } = require("../controllers/orderController.jsx");//importing logics for orders
const router = express.Router();

router.route("/order").post(createOrder);

module.exports = router;//exporting modeules
