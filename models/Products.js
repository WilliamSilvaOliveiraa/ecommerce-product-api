const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  pictures: [
    {
      pictureUrl: String,
    },
  ],
  specification: String,
  disponibility: Boolean,
  stock: Number,
});

module.exports = mongoose.model("Product", productSchema);
