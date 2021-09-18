const express = require("express");
const {
  getPizzaPizza,
  postPizzaPizza,
  getPizzaByIds,
  editedpizza,
  deletepizza,
} = require("../controllers/pizzaController");
const router = express.Router();

router.post("/api/pizza/postPizza", postPizzaPizza);
router.get("/api/pizza/getpizza", getPizzaPizza);
router.post("/api/pizza/getpizza/getpizzaid", getPizzaByIds);
router.post("/api/pizza/getpizza/editpizza", editedpizza);
router.post("/api/pizza/deltepizza", deletepizza);

module.exports = router;
