const express = require('express');
const validate = require('express-validation');
const registerController = require('../controllers/register.js');
const router = new express.Router();

const postRegister = require('./validators/register.js');

router.route('/new/').post(
    validate(postRegister.validate), registerController.postRegister);

module.exports = router;
