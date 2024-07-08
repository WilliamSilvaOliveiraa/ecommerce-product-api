require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const MongoPassword = process.env.MONGO_PASSWORD;
const MongoUser = process.env.MONGO_USER;

console.log("User", MongoUser);
console.log("Password", MongoPassword);

const app = express();
app.use(express.json());
const port = 3000;

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

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://williamsilva20062005:xrYVQfDOoUJhbQKk@products-learn-api.jighmlj.mongodb.net/?retryWrites=true&w=majority&appName=Products-learn-api"
  );
  console.log(`Example app listening at http://localhost:${port}`);
});
