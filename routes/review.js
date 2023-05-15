const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/Review");

router.get(
  "/getReviewByProductId/:productId",
  ReviewController.getReviewByProductId
);

router.post("/add", ReviewController.add);

module.exports = router;
