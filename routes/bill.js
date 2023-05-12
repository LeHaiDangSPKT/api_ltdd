const express = require("express");
const router = express.Router();

const BillController = require("../controllers/Bill");

router.put("/update/:id", BillController.update);
router.delete("/delete/:id", BillController.delete);
router.get("/getUnpaiBills/:id", BillController.getUnpaiBills);
router.post("/add", BillController.add);

module.exports = router;
