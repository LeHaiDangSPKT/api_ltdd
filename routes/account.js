const express = require("express");
const router = express.Router();

const AccountController = require("../controllers/Account");

router.get("/getAccount/:id", AccountController.getAccount);
router.post("/login", AccountController.login);
router.put("/update/:id", AccountController.update);

module.exports = router;
