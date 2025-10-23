const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;