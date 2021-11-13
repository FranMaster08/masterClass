var express = require('express');
var router = express.Router();
const {userController} = require('../controller')
/* GET users listing. */
router.get('/', userController.getAllUsers);
router.post('/login', userController.login);
router.post('/register', userController.createUser);

module.exports = router;
