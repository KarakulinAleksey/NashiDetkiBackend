const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const { use } = require("bcrypt/promises.js");

const createUser = (req, res) => {
  const { name, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        name,
        email,
        password: hash,
      })
    )
    .then((user) => {
      res.status(201).send({
        _id: user.id,
        name: user.name,
        emai: user.email,
        password: user.password,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id }, 
        "some-secter-key", 
        { expiresIn: 3600}
        );
    //   res.send(token);
      // res.send(user);
      res.cookie("jwt", token, {

      })
      .send({ message: "Логин прошел успешно"});
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};
// User.findOne({ email })
//      .then((user)=>{
//         if(!user){
//             return Promise.reject(new Error('Неправильные почта или пароль1'))
//         }
//         console.log("user", user);
//         return bcrypt.compare(password, user.password);
//         // res.status(200).send(user);
//      })
//      .then((matched) =>{
//         console.log('match', matched);
//         if(!matched){
//             return Promise.reject(new Error('Неправильные почта или пароль2'))
//         }
//         res.send({ message: "login true" });
//      })
//      .catch((err) => {
//         res.status(401).send({ message: err.message });
//      })
// }

module.exports = {
  createUser,
  login,
};
