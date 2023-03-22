const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Account = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    roleID: { type: String },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("account", Account);
