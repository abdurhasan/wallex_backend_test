const mongoose = require('mongoose');

const accountSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
    },
    bank_id: {
      type: mongoose.Types.ObjectId,
      ref: 'Bank',
      required: true
    },
    balance: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
