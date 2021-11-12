const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome)
router.get('/register',navigationController.getRegister)
router.get('/login',navigationController.getLogin)
router.get('/principal',navigationController.getPrincipal)
module.exports = router;
