const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const ProductController = require("../controllers/ProductController");

router.post("/", upload.single("file"), ProductController.create);
router.get("/", ProductController.findAll);
// router.delete("/:id", PictureController.remove);

module.exports = router;
