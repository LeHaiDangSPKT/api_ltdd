const CartModel = require("../models/Cart");
const ProductModel = require("../models/Product");
class Cart {
  update(req, res, next) {
    CartModel.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  delete(req, res, next) {
    CartModel.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  // Get cart and price, name of productId
  getCart(req, res, next) {
    const productId = req.params.productId;
    Promise.all([
      ProductModel.findOne({ _id: productId }),
      CartModel.find({ productId: productId }),
    ])
      .then(([product, cart]) => {
        console.log(product, cart);
        res.json({ price: product.price, name: product.name, cart });
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Cart();
