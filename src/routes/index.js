const express = require('express');
const router = express.Router();

const homeRoute = require('./home');
const usersRoute = require('./api/v1/users');
const productsRoute = require('./api/v1/products');
const salesRoute = require('./api/v1/sales');

router.use('/', homeRoute);
router.use('/api/v1/users', usersRoute);
router.use('/api/v1/products', productsRoute);
router.use('/api/v1/sales', salesRoute);


module.exports = router;