const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/Product");

router.get("/getAllProducts", ProductController.getAllProducts);
router.get("/getProductById/:id", ProductController.getProductById);
router.get("/getProductByTypeId/:id", ProductController.getProductByTypeId);
router.get("/getTopProducts", ProductController.getTopProducts);
router.put("/update/:id", ProductController.update);
router.delete("/delete/:id", ProductController.delete);
router.post("/getProductByListTypeId", ProductController.getProductByListTypeId);

module.exports = router;
