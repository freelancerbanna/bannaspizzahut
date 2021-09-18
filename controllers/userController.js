const { userModel } = require("../models/userModel");

//user Register
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new userModel({
      name: name,
      email: email,
      password: password,
    });
    newUser.save();
    res.status(200).send("Register successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

//user login
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await userModel.find({ email: email, password: password });

    if (User.length > 0) {
      const currentUser = {
        name: User[0].name,
        email: User[0].email,
        password: User[0].password,
        isAdmin: User[0].isAdmin,
        _id: User[0]._id,
      };
      res.status(200).send(currentUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteUsers = async (req, res) => {
  const userId = req.body.userid;
  try {
    await userModel.findByIdAndDelete(userId);
    res.status(200).send("User Delete Successfully");
  } catch (err) {
    res.status(402).send(err);
  }
};
module.exports = { userRegister, userLogin, deleteUsers, getAllUsers };
