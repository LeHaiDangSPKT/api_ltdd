const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Notification = new Schema(
  {
    userId: { type: String },
    type: { type: String },
    message: { type: String },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bill", Bill);
