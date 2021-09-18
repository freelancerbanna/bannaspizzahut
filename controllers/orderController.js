const stripe = require("stripe")(
  "sk_test_51JXz75GKEiYuiSILgeKk0wrHuzqYRsG7dCFsPuk9bkYUyQhvmCRgIiglNirjPdLjUwFneyiQy4Sho3PRNYvaXx7a00coKCz8yZ"
);
const { v4: uuidv4 } = require("uuid");
const OrderModel = require("../models/orderModels");

const placeOrderItems = async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
      },
      { idempotencyKey: uuidv4() }
    );
    if (payment) {
      const newOrder = new OrderModel({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      newOrder.save();
      res.status(200).send("Payment Done");
    } else {
      res.status(404).send("Payment Failed");
    }
  } catch (err) {
    res.status(400).send("Something went wrong" + err);
  }
};

const getUserOrder = async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await OrderModel.find({ userId: userId }).sort({ _id: -1 });
    res.status(200).send(orders);
  } catch (error) {
    res.status(402).send(error);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.status(200).send(orders);
  } catch (err) {
    res.status(402).send(err);
  }
};
const deliverOrder = async (req, res) => {
  const orderId = req.body.orderid;
  try {
    const order = await OrderModel.findById(orderId);
    console.log(order);
    order.isDeliver = true;
    await order.save();
    res.status(200).send("Deliver Succesfsfully");
  } catch (err) {
    res.status(402).send(err);
  }
};

module.exports = { placeOrderItems, getUserOrder, getAllOrders, deliverOrder };
