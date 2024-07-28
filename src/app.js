const express = require("express");
const app = express();
require("dotenv").config();
require("./db");

const port = process.env.PORT || 3000;

const ProductRoutes = require("../routes/Product");

app.use("/products", ProductRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
