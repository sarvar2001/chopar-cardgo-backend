const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")


// config
dotenv.config()

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors())




// router
app.get("/", (req, res) => {
  res.send("hello world")
})

app.use("/api/users", require("./routers/usersRoutes"));

mongoose.connect(process.env.MONGO_URI, {
  useNewURLParser: true
}).then(() => console.log("mongoDb connected"))

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))