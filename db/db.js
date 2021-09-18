const mongoose = require("mongoose");
const mongoUrl =
  process.env.MONGO_DB ||
  "mongodb+srv://bannapizza:bannapizza@cluster0.t8nul.mongodb.net/bannapizzahut?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("connected", () => {
  console.log("connection succesfull");
});

module.exports = mongoose;
