const { User } = require('../models/userModel');
require('dotenv').config();

const admin = (req, res, next) => {
  User.findOne({ username: req.user.username }, (err, client) => {
    if (client._doc.role === 1) {
      next();
    } else {
      res.json({ success: false, message: 'HANYA ADMIN YANG BOLEH MASUK' });
    }
  });
};

module.exports = admin;
