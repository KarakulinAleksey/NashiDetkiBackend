const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: 2,
            maxlength: 30,
            default: 'name',
            require: true,
        },
        email: {
            type: String,
            validate: [validator.isEmail, 'Некорректный email'],
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



module.exports = mongoose.model('user', userSchema);