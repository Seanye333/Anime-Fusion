const router = require('express').Router();
const userRoutes = require('./userRoutes');
const apiRoutes = require('./api');

router.use('/', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;
