const express = require('express');
const router = new express.Router();
const registerRoute = require('./v1/routes/register.js');
const healthRoute = require('./v1/routes/health.js');

router.use('/api/v1/register', registerRoute);
router.use('/api/v1/health', healthRoute);

module.exports = router;
