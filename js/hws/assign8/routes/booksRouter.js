const express = require("express");
const router = express.Router();

const booksController = require("../controllers/booksController");

router.get("/", booksController.getAll);
router.get("/:id", booksController.getById);
//router.get("/:name", booksController.getByName);
router.post("/", booksController.save);
router.delete("/:id", booksController.deleteById);
router.put("/:id", booksController.updateById);
module.exports = router;
