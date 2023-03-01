const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');
const contectsController = require('../controllers/contacts')

router.get('/',productsController.getTOShopPage)

router.get('/contectus',contectsController.getTOContactusPage)

router.post('/success',contectsController.postToSuccessPage)

module.exports = router;