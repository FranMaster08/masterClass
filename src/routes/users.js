var express = require('express');
var router = express.Router();
const {userController} = require('../controller')
/* GET users listing. */
router.post('/login', userController.login);

module.exports = router;
