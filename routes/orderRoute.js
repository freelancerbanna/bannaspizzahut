const express = require("express");
const {
  placeOrderItems,
  getUserOrder,
  getAllOrders,
  deliverOrder,
} = require("../controllers/orderController");
const router = express.Router();

router.post("/api/orders/placeorder", placeOrderItems);
router.post("/api/orders/getuserorders", getUserOrder);
router.get("/api/orders/getallorders", getAllOrders);
router.post("/api/orders/deliverorder", deliverOrder);

module.exports = router;
