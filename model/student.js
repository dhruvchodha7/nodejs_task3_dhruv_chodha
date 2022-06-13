const mongoose = require('mongoose');
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter email in correct format']
      },
      date: {
        type: Date,
        default: Date.now(),
      }
})


module.exports = mongoose.model('Student', studentSchema);