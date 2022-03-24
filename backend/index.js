const express = require("express")

const app = express()

const carController = require("./controllers/car.controller")

const cors = require("cors")

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Working Backend")
})

app.use("/car",carController)

module.exports = app