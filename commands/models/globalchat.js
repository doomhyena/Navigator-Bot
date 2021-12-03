const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Author: String,
    Activated: Boolean,
})

module.exports = mongoose.model('globalchannel', Schema)