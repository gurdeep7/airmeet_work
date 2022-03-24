const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    car_make: { type: String, required: true },
    car_model: { type: String, required: true },
    car_year: { type: Number, required: true },  
},{

    versionKey:false,
})

const car = mongoose.model("car",carSchema)

module.exports = car  