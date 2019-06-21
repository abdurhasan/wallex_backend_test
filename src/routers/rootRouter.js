const rootService = require('../services/rootService');
const express = require('express');
const router = express.Router();

const { admin } = require('../middlewares/admin');

/* GET home page. */
router.post('/admin/sign_in', rootService.adminLogin);

router.get('/users',admin, rootService.getUsers);
router.get('/banks', admin,rootService.getBanks);
router.get('/accounts', admin,rootService.getAccounts);



router.delete('/:user_id/delete_user',admin, rootService.deleteUser);
router.get('/:user_id/detail_user',admin, rootService.detailUser);
router.put('/:user_id/update_user',admin, rootService.updateUser);


router.get('/:bank_id/detail_bank',admin, rootService.detailBank);
router.delete('/:bank_id/delete_bank',admin, rootService.deleteBank);
router.put('/:bank_id/update_bank',admin, rootService.updateBank);



module.exports = router;

