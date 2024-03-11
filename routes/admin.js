const path = require('path');

const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProducts);

// /admin/products => GET
router.get('/products', adminController.getProducts)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
