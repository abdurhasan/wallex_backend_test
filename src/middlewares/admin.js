const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
require('dotenv').config();

const admin = (req, res, next) => {
  let token = req.cookies.x_auth || req.query.API_KEY;
  let userInfo = {};
  if (token) {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (!decoded)
        return res.json({
          success: false,
          message: 'Anda tidak memiliki akses'
        });

      Admin.findOne({ email: decoded.email }, (err, admin) => {
        if (!admin)
          return res.json({
            success: false,
            message: 'Anda tidak memiliki akses'
          });
        else {          
          req.admin_email=decoded.email
          next();
        }
      });
    });
  } else {
    res.json({ success: false, message: 'Anda tidak memiliki akses' });
  }
};

module.exports = { admin };
