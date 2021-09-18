const mongoose = require("mongoose");

const PizzaSchema = mongoose.Schema({
  name: {
    type: String,
    require,
  },
  varients: [],
  prices: [],
  category: { type: String, require },
  image: { type: String, require },
  description: { type: String, require },
});
const pizzaModal = mongoose.model("Pizza", PizzaSchema);
module.exports = pizzaModal;
