const ProductModel = require("../models/Product");

class Product {
  getAllProducts(req, res, next) {
    ProductModel.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  getProductById(req, res, next) {
    ProductModel.findById(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  getProductByListTypeId(req, res, next) {
  const { listTypeId } = req.body;
  ProductModel.find({ typeId: { $in: listTypeId } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
  getProductByTypeId(req, res, next) {
    ProductModel.find({ typeId: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  getTopProducts(req, res, next) {
    ProductModel.find({ type: req.body.type })
      .limit(+req.body.limit)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  update(req, res, next) {
    ProductModel.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  delete(req, res, next) {
    ProductModel.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  // Search product by req.body.text or req.body.type
  search(req, res, next) {
    ProductModel.find({
      $or: [
        { name: { $regex: req.body.text, $options: "i" } },
        { type: { $regex: req.body.text, $options: "i" } },
      ],
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Product();
