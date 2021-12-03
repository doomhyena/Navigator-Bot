const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Guild: String,
    Category: String,
})

module.exports = mongoose.model('ticket', Schema)