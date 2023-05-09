const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    accountId: { type: String },
    fullname: { type: String },
    sex: { type: String },
    phone: { type: String },
    address: { type: String },
    avatar: { type: String },
    state: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
