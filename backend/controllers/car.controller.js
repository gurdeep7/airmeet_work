const express = require("express")

const car = require("../models/car.model")
const router = express.Router()

router.post("",async(req,res)=>{
    try {
       
    const cars =await car.create(req.body)
 
    res.status(200).send(cars)
 }catch(e){
  res.status(500).json({status:e.message})
 }
 })

 router.get("",async(req,res)=>{
    try{
        const page = +req.query.page
       
        const cars =await car.find().skip((page-1)*10).limit(10).lean().exec()

        const totalPages = Math.ceil(await car.find().countDocuments()/10)
        res.status(201).json({cars,totalPages})
    }catch(e){
        res.status(500).json({status:e.message})
    }
})
router.delete("/:id", async(req,res)=>{
    try{
        const deletedcar =await car.findByIdAndDelete(req.params.id)
        const cars =await car.find().lean().exec()
        res.status(201).send(cars)
    }catch(e){
        res.status(500).json({status:e.message})
    }
})

module.exports = router