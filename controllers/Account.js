const AccountModel = require("../models/Account");

class Account {
  // [GET] /account/getAccount/:id
  getAccount(req, res, next) {
    AccountModel.find({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  // [POST] /account/login
  login(req, res, next) {
    AccountModel.find({ email: req.body.email, password: req.body.password })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  update(req, res, next) {
    AccountModel.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Account();
