const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Notification = new Schema(
  {
    userId: { type: String },
    type: { type: String },
    message: { type: String },
    state: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("notification", Notification);
