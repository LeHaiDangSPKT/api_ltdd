const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Bill = new Schema(
  {
    userId: { type: String },
    cartId: { type: String },
    phone: { type: String },
    address: { type: String },
    date: { type: String },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bill", Bill);
