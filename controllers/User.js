const UserModel = require("../models/User");

class User {
  getUserByAccountId(req, res, next) {
    UserModel.find({ accountId: req.body.accountId })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  
  // [POST] /user/addUser
    addUser(req, res, next) {
        const { idUser, idToy, image, nameToy, price, quantity, totalPrice } = req.body;
        UserModel.create({
            idUser,
            idToy,
            image,
            nameToy,
            price,
            quantity,
            totalPrice,
            state: true,
        })
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                res.json(err);
            });
    }
  
  getUserById(req, res, next) {
    UserModel.find({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  update(req, res, next) {
    UserModel.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  delete(req, res, next) {
    UserModel.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new User();
