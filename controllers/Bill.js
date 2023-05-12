const BillModel = require("../models/Bill");

class Bill {
  update(req, res, next) {
    BillModel.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  delete(req, res, next) {
    BillModel.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  getUnpaiBills(req, res, next) {
    BillModel.find({ userId: req.params.id, state: false })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  add(req, res, next) {
    const bill = new BillModel(req.body);
    bill.save();
    res.json(bill);
  }
}
module.exports = new Bill();
