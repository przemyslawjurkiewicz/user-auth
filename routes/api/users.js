const express = require('express');
const router = express.Router();

var routerController = require('./routerController');


router.route('/register').post(routerController.postRegister);
router.route('/login').post(routerController.postLogin);

module.exports = router;