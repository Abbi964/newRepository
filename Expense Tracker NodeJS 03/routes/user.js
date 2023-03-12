const userController = require('../constroller/user')

const express = require('express');

const router = express.Router();

router.get('/signup',userController.getSignUpPage);

router.post('/signup',userController.postSignupPage);

router.get('/login',userController.getLoginPage);

module.exports  = router