const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    name : {type: String},
    date: { type: Date, default: Date.now() },
    phone: { type: String, required: true }
})

const UsersInfo = mongoose.model("UsersInfo", user);

module.exports = UsersInfo;