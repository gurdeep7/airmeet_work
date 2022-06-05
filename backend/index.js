const express = require("express")

const cookieParser = require('cookie-parser')

const app = express()

const carController = require("./controllers/car.controller")

const cors = require("cors")
const { v4 } = require("uuid")
const session = require("express-session")
const { default: helmet } = require("helmet")

app.use(cors())

app.use(cookieParser())

app.use(express.json())

app.use(helmet())

app.use(session({
    genid: function(req) {
      return v4() // use UUIDs for session IDs
    },
    
    proxy: true,
    secret: 'xgZyQK',
    rolling:true,
   cookie:{ httpOnly: false, sameSite:"none", secure:true, maxAge:20 * 60000} //20 minutes
  
  }))

 
app.get("/",(req,res)=>{
    res.send("Working Backend")
})

app.use("/car",carController)

module.exports = app