const userController = require('../constroller/user')

const express = require('express');

const router = express.Router();

router.get('/',userController.getSignUpPage)

module.exports  =router