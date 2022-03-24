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
        const cars =await car.find().lean().exec()
        res.status(201).send(cars)
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