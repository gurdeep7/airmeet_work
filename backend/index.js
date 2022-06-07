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

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials",true)
    res.set("X-XSS-Protection", "1; mode=block");
    res.set("Cache-control", "private")
    next();
  });
app.use(session({
    genid: function(req) {
      return v4() // use UUIDs for session IDs
    },
    resave: true,
    saveUninitialized: false,
    proxy: true,
    secret: 'xgZyQK',
    rolling:true,
   cookie:{ httpOnly: true, sameSite:"none", secure:true, maxAge:20 * 60000} //20 minutes
  
  }))

 
app.get("/",(req,res)=>{
    res.send("Working Backend")
})

app.use("/car",carController)

module.exports = app