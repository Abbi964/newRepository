const path = require('path');

const express = require('express');

const productController = require('../controllers/products')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productController.getAddProductPage);

// /admin/add-product => POST
router.post('/add-product', productController.postToAddProductPage);

module.exports = router;
