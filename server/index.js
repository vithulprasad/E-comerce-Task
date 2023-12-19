const express = require('express')
const app = express()
require('dotenv').config();
const UserRouter = require('./routes/UserRoute')
const AdminRoute = require('./routes/AdminRoute')
const mongoose = require('mongoose')
const cors = require('cors');


const db= mongoose.connect(process.env.DB)
if(db){
    console.log('database connected')
}
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/',UserRouter)
app.use('/admin',AdminRoute)

app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT)
})