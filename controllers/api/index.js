const Users = require('./userController');
const Anime = require('./animeController');
const Character = require('./characterController');
const router = require('express').Router();

router.use('/users', Users);
router.use('/anime', Anime);

module.exports = router;
