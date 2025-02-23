const { default: mongoose } = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageURL: String,
  price: Number,
  NoOfServings: String,
});
const MenuItem = mongoose.model("MenuItem", menuSchema);
module.exports = { MenuItem };
