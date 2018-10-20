const express = require('express');
const router = express.Router();

const homeRoute = require('./home');
const usersRoute = require('./api/v1/users');

router.use('/', homeRoute);
router.use('./api/v1/users', usersRoute);

module.exports = router;