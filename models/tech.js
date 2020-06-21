const mongoose = require('mongoose')


const techSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50

    }
})

const Tech = mongoose.model('tech', techSchema)

module.exports = Tech