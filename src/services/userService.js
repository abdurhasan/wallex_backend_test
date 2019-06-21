const User = require('../models/userModel');
const Account = require('../models/accountModel');
// const Bank = require('../models/bankModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userService = {
  createUser: (req, res) => {    
    try {
      let userdata = req.body;

      if(!userdata.email || !userdata.password || !userdata.retype_password || userdata.retype_password!==userdata.password){
        res.json({ success: false, message: ' Data harus diisi dengan benar ! ' });
      };
      
      const user = new User(userdata);
      user.save((err, doc) => {
        if (err) return res.json({ success: false, message: err });
        return res.status(200).json({
          success: true,
          doc
        });
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error });
    }
  },
  userLogin: (req, res) => {
    try {
      if (!req.body.email || !req.body.password)
        res.status(400).json({
          success: false,
          message: 'Email dan password harus diisi!'
        });
      User.findOne({ email: req.body.email }, (err, doc) => {
        if (!doc)
          res
            .status(400)
            .json({ success: false, message: 'Email atau password salah' });

        doc.comparePassword(req.body.password, (err, isMatch) => {
          let token = jwt.sign(req.body, process.env.SECRET);

          if (!isMatch)
            return res.json({
              success: false,
              message: 'Email atau password salah'
            });
          else {
            res
              .cookie('x_auth', token)
              .status(200)
              .json({
                success: true,
                doc,
                token: token
              });
          }
        });
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error });
    }
  },

  userInfo: (req, res) => {
    let userData = req.userInfo;
    userData.account = [];
    try {
      Account.find({ user_id: req.userInfo._id })
        .populate({ path: 'bank_id', select: 'bank_name' })
        .exec((err, userAccount) => {
          if (err) return res.json({ success: false, message: err });
          for (accounts of userAccount) {
            userData.account.push({
              bank: accounts.bank_id.bank_name,
              saldo: accounts.balance
            });
          }

          return res.status(200).json({
            success: true,
            userData
          });
        });
    } catch (error) {
      return res.status(400).json({ success: false, message: error });
    }
  },
  userUpdate: (req, res) => {
    try {
      User.findOneAndUpdate(
        { _id: req.user._id },
        { token: '' },
        (err, doc) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).send({
            success: true
          });
        }
      );
    } catch (error) {
      return res.status(400).json({ success: false, message: error });
    }
  }
};

module.exports = userService;
