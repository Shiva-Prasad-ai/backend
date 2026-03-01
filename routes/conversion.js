const express = require("express")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const router = express.Router()

router.post("/save", async (req, res) => {
const token = req.headers.authorization

const decoded = jwt.verify(token, "secretkey")

const user = await User.findById(decoded.id)

user.history.push(req.body)

await user.save()

res.json({ message: "Saved" })
})

router.get("/history", async (req, res) => {
const token = req.headers.authorization

const decoded = jwt.verify(token, "secretkey")

const user = await User.findById(decoded.id)

res.json(user.history)
})

module.exports = router