const Users = require('./userController');
const Anime = require('./animeController');
const router = require('express').Router();

router.use('/users', Users);
router.use('/anime', Anime);

module.exports = router;
