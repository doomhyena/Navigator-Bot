const mongoose = require('mongoose')

module.exports = mongoose.model(
    'economy',
    new mongoose.Schema({
        id: String,
        coins: Number
    })
);