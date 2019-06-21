const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_I = 10;
require('dotenv').config();

const adminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: 1
    },
    password: {
      type: String,
      trim: true
    },
    role: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

adminSchema.pre('save', function(next) {
  var admin = this;
  if (admin.password) {
    bcrypt.hash(admin.password, SALT_I, function(err, hash) {
      if (err) return next(err);
      admin.password = hash;
      next();
    });
  } else {
    next();
  }
});

adminSchema.methods.comparePassword = function(candidatePassword, cb) {
  let actualPassword = this.password;
  bcrypt.compare(candidatePassword, actualPassword, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch, actualPassword);
  });
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
