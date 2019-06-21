const mongoose = require('mongoose');

const bankSchema = mongoose.Schema(
  {
    bank_name: {
      type: String,
      trim: true,
      unique: 1
    }
  },
  { timestamps: true }
);

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
