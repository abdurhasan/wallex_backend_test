const Admin = require('../models/adminModel');
require('dotenv').config();

const superadmin = (req, res, next) => {

    Admin.findOne({ email: req.admin_email }, (err, admin) => {
        
        if (admin.role !== 1)
            return res.json({
                success: false,
                message: 'Anda tidak memiliki akses'
            });
        else {
            
            next();
        }
    });
};

module.exports = { superadmin };
