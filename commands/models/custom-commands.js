const mongoose = require('mongoose');

module.exports = mongoose.model('costum-commands', new mongoose.Schema({
    Guild: String,
    Command: String,
    Response: String
}))