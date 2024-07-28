const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.post("/", ProductController.create);
router.delete("/:id", ProductController.delete);
router.put("/:id", ProductController.update);
router.get("/", ProductController.getAll);
router.post("/teste", ProductController.teste);

module.exports = router;
