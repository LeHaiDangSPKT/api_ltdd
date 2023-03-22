const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Discount = new Schema(
  {
    productId: { type: String },
    expirationDate: { type: String },
    value: { type: Number },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Discount", Discount);
