const rootService = require('../services/rootService');
const express = require('express');
const router = express.Router();

const { admin } = require('../middlewares/admin');
const { superadmin } = require('../middlewares/superadmin');

/* ADMIN */
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

router.get('/:account_id/detail_account',admin, rootService.detailAccount);
router.delete('/:account_id/delete_account',admin, rootService.deleteAccount);
router.put('/:account_id/update_account',admin, rootService.updateAccount);

/*  SUPER ADMIN */
router.post('/admin/create',admin,superadmin ,rootService.createAdmin);

module.exports = router;

