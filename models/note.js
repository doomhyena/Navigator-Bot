const {model, Schema} = require("mongoose")

module.exports = model(
    "notes",
    new Schema({
        User: String,
        Note: String,
    })
);