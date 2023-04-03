const express = require("express");
const router = express.Router();

const NotificationController = require("../controllers/Notification");

router.get("/getAllNotifications", NotificationController.getAllNotifications);
router.put("/update/:id", NotificationController.update);

module.exports = router;
