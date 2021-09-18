const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  getAllUsers,
  deleteUsers,
} = require("./../controllers/userController");

router.post("/api/users/register", userRegister);
router.post("/api/users/login", userLogin);
router.get("/api/users/getusers", getAllUsers);
router.post("/api/users/deleteuser", deleteUsers);
module.exports = router;
