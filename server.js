const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://unit_dbuser:<db_password>@cluster0.hcn3l01.mongodb.net/?appName=Cluster0")
.then(() => console.log("Database connected"))

app.listen(5000, () => console.log("Server running on 5000"))

const authRoutes = require("./routes/auth")
app.use("/api", authRoutes)