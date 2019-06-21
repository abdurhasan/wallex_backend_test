const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

const auth = (req, res, next) => {
  let token = req.cookies.x_auth || req.query.API_KEY;
  let userInfo = {};
  if (token) {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (!decoded)
        return res.json({
          success: false,
          message: 'Anda tidak memiliki akses'
        });

      User.findOne({ email: decoded.email }, (err, user) => {
        if (!user)
          return res.json({
            success: false,
            message: 'Anda tidak memiliki akses'
          });
        else {
          userInfo._id = user._id;
          userInfo.email = user.email;
          userInfo.password = user.password;
          req.userInfo = userInfo;
          next();
        }
      });
    });
  } else {
    res.json({ success: false, message: 'Anda tidak memiliki akses' });
  }
};

module.exports = { auth };
