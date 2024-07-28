const Product = require("../models/Products");

exports.create = async (req, res) => {
  try {
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
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ message: "Error creating product", error });
  }
};

exports.delete = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send({ message: "Product not found" });
    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting product", error });
  }
};

exports.update = async (req, res) => {
  try {
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
      { new: true }
    );
    if (!product) return res.status(404).send({ message: "Product not found" });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: "Error updating product", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: "Error fetching products", error });
  }
};

exports.teste = async (req, res) => {
  res.status(200).json("Teste");
};
