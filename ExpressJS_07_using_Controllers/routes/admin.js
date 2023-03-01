const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product',productsController.getAddProductPage)

router.post('/products',productsController.postToAddProductsPage)

module.exports = router;