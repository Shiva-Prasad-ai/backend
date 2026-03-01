const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
username: String,
email: String,
password: String,
history: [
{
from: String,
to: String,
input: Number,
result: Number,
date: { type: Date, default: Date.now }
}
]
})

module.exports = mongoose.model("User", userSchema)
