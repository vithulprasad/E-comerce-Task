const mongoose = require('mongoose')

const Category = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("category",Category)