const ReviewModel = require("../models/Review");

class Review {
  getReviewByProductId(req, res, next) {
    ReviewModel.find({ productId: req.params.productId })
      .sort({ time: -1 })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  add(req, res, next) {
    const review = new ReviewModel(req.body);
    review.save();
    res.json(review);
  }
}
module.exports = new Review();
