const router = require('express').Router();
const { users } = require('./db.js');

const doesUserExist = (req, res, next) => {
    const { id } = req.params;
    if (!users[id]){
        console.log('if');
        res.send('not animals');
        return;
    } 
    next();
}

const sendUser = (req, res, next) => {
    // const { id } = req.params;
    const { name, age } = users[req.params.id];
    // console.log('else', name);
    res.send(`name ${name}, age ${age}`);  
    // res.send(users[req.params.id]);
}

router.get('/params/:id', doesUserExist);
router.get('/params/:id', sendUser);


// router.get('/params/:id', (req, res) => {
    // const { id } = req.params;
    // if (!users[id]){
    //     console.log('if');
    //     res.send('not animals');
    //     return;
    // } 

    //     const { name, age } = users[id];
    //     console.log('else', name);
    //     res.send(`name ${name}, age ${age}`);     
    
// })

module.exports = router;