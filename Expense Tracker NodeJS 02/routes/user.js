const userController = require('../constroller/user')

const express = require('express');

const router = express.Router();

router.get('/',userController.getSignUpPage);

router.post('/user/signup',userController.postSignupPage);

module.exports  =router