const ReviewModel = require("../models/Review");
const UserModel = require("../models/User");
class Review {
  async getReviewByProductId(req, res, next) {
    try {
      const result = await ReviewModel.find({
        productId: req.params.productId,
      }).sort({ time: -1 });

      const arr = [];
      for (const item of result) {
        const user = await UserModel.findOne({ _id: item.userId });
        arr.push({ ...item._doc, fullname: user.fullname });
      }

      console.log(arr);
      res.json(arr);
    } catch (err) {
      res.json(err);
    }
  }

  getAll(req, res, next) {
    ReviewModel.find()
      .sort({ time: -1 })
      .then((result) => {
        res.json(result);
      });
  }

  add(req, res, next) {
    const review = new ReviewModel(req.body);
    review.save();
    res.json(review);
  }
}
module.exports = new Review();
