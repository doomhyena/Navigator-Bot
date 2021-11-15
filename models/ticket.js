const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Guild: String,
    Category: String,
    Channel: String,
})

module.exports = mongoose.model('ticket', Schema)