const express = require("express");
const router = express.Router();

const CartController = require("../controllers/Cart");

router.put("/update/:id", CartController.update);
router.delete("/delete/:id", CartController.delete);

module.exports = router;
