const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.save);
router.delete("/:id", productController.deleteById);
router.put("/:id", productController.updateById);

module.exports = router;
