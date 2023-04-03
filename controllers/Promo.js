const PromoModel = require("../models/Promo");

class Promo {
  getAllPromos(req, res, next) {
    PromoModel.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  getTopPromos(req, res, next) {
    PromoModel.find({})
      .limit(+req.body.limit)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Promo();
