const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    password: {
      type: String,
      require,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", UserSchema);
module.exports = { userModel };
