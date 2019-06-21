const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('dotenv').config();

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: 1
    },
    password: {
      type: String
    }
  },
  { timestamps: true }
);

userSchema.pre('save', function(next) {
  var user = this;
  if (user.password) {
    bcrypt.hash(user.password, Number(process.env.SALT_I), function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  let actualPassword = this.password;
  bcrypt.compare(candidatePassword, actualPassword, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch, actualPassword);
  });
};
const User = mongoose.model('User', userSchema);

module.exports = User;
