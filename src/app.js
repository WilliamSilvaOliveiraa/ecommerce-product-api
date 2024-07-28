const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
require("./db");
const productRoutes = require("../routes/Product");

app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
