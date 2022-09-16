const router = require('express').Router();
const { createUser } = require('../controller/users.js');

router.post('/signup', createUser);


module.exports = router;