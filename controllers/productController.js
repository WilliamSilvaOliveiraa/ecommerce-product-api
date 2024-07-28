const Product = require("../models/Products");
const fs = require("fs");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const file = req.file;
    const product = new Product({
      name,
      src: file.path,
    });

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem." });
  }
};

exports.findAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: "Error fetching products", error });
  }
};

exports.remove = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).send({ message: "Product not found" });
    }

    fs.unlinkSync(product.src);
    await product.remove();

    res.status(200).send({ message: "Product deleted" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting product", error });
  }
};
