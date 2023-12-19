const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        ref:"category"
    },
    price:{
        type:Number,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("product",Product)