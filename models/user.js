const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: "name",
      require: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Некорректный email"],
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    versionKey: false,
  }
);

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error("Неправильные почта или пароль1"));
      }
      console.log("user", user);
      return (
        bcrypt
          .compare(password, user.password)
          .then((matched) => {
            console.log("match", matched);
            if (!matched) {
              return Promise.reject(
                new Error("Неправильные почта или пароль2")
              );
            }
            return user;
          })
      );
    })
   
};

module.exports = mongoose.model("user", userSchema);
