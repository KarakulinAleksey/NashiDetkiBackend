const User = require('../models/user.js');

const createUser = (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body;
    
    User.create({
        name,
        email,
        password,
    })
    .then((user)=>{res.status(201).send({
        _id: user.id,
        name: user.name,
        emai: user.email,
        password: user.password
    })})
    .catch((err) => {
        res.send(err);
    });
}

module.exports = {
    createUser,
}