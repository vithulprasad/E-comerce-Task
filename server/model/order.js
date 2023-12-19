const mongoose = require('mongoose')

const Orders = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        ref:"product"
    },
    totalPrice:{
        type:Number,
        required:true
    },
    address:{
        state:{type:String},
        distinct:{type:String},
        city:{type:String},
        localArea:{type:String},
    },
    data:{
        type:Date
    }
})

module.exports = mongoose.model("orders",Orders)