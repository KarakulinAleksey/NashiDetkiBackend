const routerSignUp = require('express').Router();

const postParam = (req, res)=>{
    const {name, email} = req.body;
    console.log(name, email);
    res.send(req.body);
}

routerSignUp.post('/', postParam);

module.exports = routerSignUp;