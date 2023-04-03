const express = require("express");
const router = express.Router();

const UserController = require("../controllers/User");

router.get("/getUserByAccountId", UserController.getUserByAccountId);
router.get("/getUserById/:id", UserController.getUserById);
router.put("/update/:id", UserController.update);
router.delete("/delete/:id", UserController.delete);

module.exports = router;
