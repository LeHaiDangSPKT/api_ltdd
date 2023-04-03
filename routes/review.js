const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/Review");

router.get("/getAllReviews/:id", ReviewController.getAllReviews);

module.exports = router;
