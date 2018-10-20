const express = require('express');
const router = express.Router();

const homeRoute = require('./home');
const usersRoute = require('./api/v1/users');
const productsRoute = require('./api/v1/products');

router.use('/', homeRoute);
router.use('/api/v1/users', usersRoute);
router.use('/api/v1/products', productsRoute);


module.exports = router;