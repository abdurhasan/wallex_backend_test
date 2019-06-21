const User = require('../models/userModel');
const Admin = require('../models/adminModel');
const Account = require('../models/accountModel');
const Bank = require('../models/bankModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('dotenv').config();

const userSeeder = require('./userSeeder.json');
const adminSeeder = require('./adminSeeder.json');
const bankSeeder = require('./bankSeeder.json');
const accountSeeder = require('./accountSeeder.json');

userSeeder.forEach(snap => {
  snap['password'] = bcrypt.hashSync(snap.password, Number(process.env.SALT_I));
});

adminSeeder.forEach(snap => {
  snap['password'] = bcrypt.hashSync(snap.password, Number(process.env.SALT_I));
});

try {
  mongoose.connect(process.env.DATABASE);
  mongoose.connection
    .on('error', function(err) {
      console.error('Error: Gagal koneksi ke MongoDB');
    })
    .on('open', () => {
      User.insertMany(userSeeder).then((error, docs) => {
        Admin.insertMany(adminSeeder).then((error, docs) => {
          Bank.insertMany(bankSeeder).then((error, docs) => {
            Account.insertMany(accountSeeder).then((error, docs) => {
              process.exit(0);
            });
          });
        });
      });
    });
} catch (error) {
  console.error(error);
}

process.on('exit', () => {
  console.log('SEEDER SELESAI');
});
