const express = require("express");
const mongoose = require("mongoose");
const app = express();

console.log("Rodou");
require("dotenv").config();
require("./db");

app.use(express.json());
const port = process.env.PORT || 3000;

const productSchema = new mongoose.Schema({
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
const Product = mongoose.model("Product", productSchema);

app.post("/", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    pictures: req.body.pictures,
    specification: req.body.specification,
    disponibility: req.body.disponibility,
    stock: req.body.stock,
  });

  await product.save();
  res.send(product);
});

app.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.send(product);
});

app.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      pictures: req.body.pictures,
      specification: req.body.specification,
      disponibility: req.body.disponibility,
      stock: req.body.stock,
    },
    {
      new: true,
    }
  );
  return res.send(product);
});

app.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
