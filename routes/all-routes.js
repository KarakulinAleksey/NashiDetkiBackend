const router = require('express').Router();
const { createUser, login } = require('../controller/users.js');

router.post('/signup', createUser);
router.post('/signin', login);


module.exports = router;