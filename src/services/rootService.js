const Admin = require('../models/adminModel');
const User = require('../models/userModel');
const Bank = require('../models/bankModel');
const Account = require('../models/accountModel');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const rootService = {
    adminLogin: (req, res) => {
        try {
            if (!req.body.email || !req.body.password)
                res.status(400).json({
                    success: false,
                    message: 'Email dan password harus diisi!'
                });

            Admin.findOne({ email: req.body.email }, (err, doc) => {
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
    getUsers: (req, res) => {
        try {
            User.find({}, (err, users) => {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    users
                });
            })


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    getBanks: (req, res) => {
        try {
            Bank.find({}, (err, banks) => {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    banks
                });
            })


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    getAccounts: (req, res) => {
        try {
            Account.find({}, (err, accounts) => {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    accounts
                });
            })


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    detailUser: (req, res) => {
        try {
            User.findOne({ _id: req.params.user_id }, function (err, user) {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    user
                });
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    deleteUser: (req, res) => {
        try {
            User.findOneAndRemove({ _id: req.params.user_id }, function (err, user) {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    deleted: user

                });
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    updateUser: (req, res) => {
        try {
            if (!req.body.email || !req.body.password)
                res.status(400).json({
                    success: false,
                    message: 'Email dan password harus diisi!'
                });
            User.findByIdAndUpdate({ _id: req.params.user_id }, req.body, function (err, user) {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    message: req.params.user_id + '  berhasil diupdate'

                });
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },

    detailBank: (req, res) => {
        try {
            Bank.findOne({ _id: req.params.bank_id }, function (err, bank) {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    bank
                });
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    deleteBank: (req, res) => {
        try {
            Bank.findOneAndRemove({ _id: req.params.bank_id }, function (err, bank) {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    deleted: bank

                });
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    updateBank: (req, res) => {
        try {
            if (!req.body.bank_name)
                res.status(200).json({
                    success: true,
                    message: req.params.bank_id + '  berhasil diupdate'
                });
            Bank.findByIdAndUpdate({ _id: req.params.bank_id }, req.body, function (err, bank) {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    message: req.params.bank_id + '  berhasil diupdate'

                });
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },

    detailAccount: (req, res) => {
        try {
            Account.findOne({ _id: req.params.account_id }, function (err, account) {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    account
                });
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    deleteAccount: (req, res) => {
        try {
            Account.findOneAndRemove({ _id: req.params.account_id }, function (err, account) {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                    success: true,
                    deleted: account

                });
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },
    updateAccount: (req, res) => {
        try {
            if (!req.body.user_id || !req.body.bank_id)
                res.status(400).json({
                    success: false,
                    message: 'User dan Bank harus diisi !'
                });

            Account.findOneAndUpdate({ _id: req.params.account_id }, req.body, function (err, account) {
                if (err) return res.json({ success: false, message: err.message });
                else {
                    return res.status(200).json({
                        success: true,
                        message: req.params.account_id + '  berhasil diupdate'

                    });
                }
            });


        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },

    createAdmin: (req, res) => {
        try {
            if (!req.body.email ||!req.body.role || !req.body.password || !req.body.retype_password || req.body.retype_password !== req.body.password) {
                res.json({ success: false, message: ' Data harus diisi dengan benar ! ' });
            };

            const admin = new Admin(req.body);
            admin.save((err, created) => {
                if (err) return res.json({ success: false, message: err });
                return res.status(200).json({
                  success: true,
                  created
                });
              });

        } catch (error) {
            return res.status(400).json({ success: false, message: error });
        }
    },


};

module.exports = rootService;

