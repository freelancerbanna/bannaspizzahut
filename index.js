const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());

const PORT = process.env.PORT || 5000;
const db = require("./db/db");

const pizzaRouter = require("./routes/pizzaRoute");
const userRouter = require("./routes/userRoute");
const orderRouter = require("./routes/orderRoute");

app.use("/", pizzaRouter);
app.use("/", userRouter);
app.use("/", orderRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
