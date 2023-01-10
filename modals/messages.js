const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message = new Schema({
    name: { type: String },
    phone: { type: String },
    date: { type: String, default: Date(Date.now()).toString()},
    otp: { type: Number }
})

const Messages = mongoose.model("Messages", message);

module.exports = Messages;