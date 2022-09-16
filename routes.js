const router = require('express').Router();
const { users } = require('./db.js');

const doesUserExist = (req, res, next) => {
    const { id } = req.params;
    if (!users[id]){
        res.send('not animals');
        return;
    } 
    next();
}

const sendUser = (req, res, next) => {
    const { name, age } = users[req.params.id];
    res.send(users[req.params.id]);
}

router.get('/params/:id', doesUserExist);
router.get('/params/:id', sendUser);


module.exports = router;