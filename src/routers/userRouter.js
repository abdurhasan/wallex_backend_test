const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');

/* GET home page. */
router.post('/register', userController.createUser);
router.post('/user_login', userController.userLogin);
router.get('/user_info',auth,userController.userInfo);



module.exports = router;
