const userService = require('../services/userService');
const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');

/* GET home page. */
router.post('/register', userService.createUser);
router.post('/sign_in', userService.userLogin);
router.get('/user_info', auth, userService.userInfo);

module.exports = router;
