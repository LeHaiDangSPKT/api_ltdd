const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Store = new Schema(
  {
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    image: { type: String },
    address: { type: String },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", Store);
