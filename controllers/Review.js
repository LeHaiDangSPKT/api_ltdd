const ReviewModel = require("../models/Review");

class Review {
  getAllReviews(req, res, next) {
    ReviewModel.find({ _id: req.param.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Review();
