const express = require("express");
const router = express.Router();

const BillController = require("../controllers/Bill");

router.get("/getAllBillByUserId/:userId", BillController.getAllBillByUserId);
router.get("/getAllBill", BillController.getAllBill);
router.post("/add", BillController.add);

module.exports = router;
