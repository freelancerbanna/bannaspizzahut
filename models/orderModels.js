const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    userId: { type: String, require },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number, require },
    isDeliver: { type: Boolean, require },
    transactionId: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
