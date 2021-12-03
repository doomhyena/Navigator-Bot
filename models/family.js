const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Guild: String,
    ID: String,
    Love: String,
})

module.exports = mongoose.model('family', Schema)