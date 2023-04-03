const NotificationModel = require("../models/Notification");

class Notification {
  getAllNotifications(req, res, next) {
    NotificationModel.find({ userId: req.body.userId, state: false })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  update(req, res, next) {
    NotificationModel.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Notification();
