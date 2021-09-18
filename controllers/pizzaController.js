const pizzaModal = require("../models/pizzaModels");

const postPizzaPizza = async (req, res) => {
  const { name, category, image, description, prices } = req.body;
  try {
    const newPizza = new pizzaModal({
      name: name,
      category: category,
      image: image,
      description: description,
      varients: ["small", "medium", "large"],
      prices: [prices],
    });
    await newPizza.save();
    res.status(200).send("Save Successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

const getPizzaPizza = async (req, res) => {
  try {
    const pizza = await pizzaModal.find({});
    res.status(200).send(pizza);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getPizzaByIds = async (req, res) => {
  const pizzaid = req.body.pizzaid;
  try {
    const pizza = await pizzaModal.findOne({ _id: pizzaid });
    res.status(200).send(pizza);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const editedpizza = async (req, res) => {
  const pizzas = req.body.editedpizza;
  const editedId = pizzas.id;
  const { name, category, description, image, prices } = pizzas;
  try {
    const pizza = await pizzaModal.findOne({ _id: editedId });
    pizza.name = name;
    pizza.image = image;
    pizza.description = description;
    pizza.prices = prices;
    pizza.category = category;

    await pizza.save();

    res.status(200).send(pizza);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deletepizza = async (req, res) => {
  const delteId = req.body.pizzaid;

  try {
    await pizzaModal.findByIdAndDelete(delteId);
    res.status(200).send("Successfully deleted");
  } catch (err) {
    res.status(400).send("Something wrong", err);
  }
};

module.exports = {
  getPizzaPizza,
  postPizzaPizza,
  getPizzaByIds,
  editedpizza,
  deletepizza,
};
