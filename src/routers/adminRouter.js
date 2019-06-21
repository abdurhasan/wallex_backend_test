const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');

/* GET home page. */
router.post('/admin_login', userController.createUser);



module.exports = router;
