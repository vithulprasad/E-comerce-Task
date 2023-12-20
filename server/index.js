const express = require('express')
const app = express()
require('dotenv').config();
const UserRouter = require('./routes/UserRoute')
const AdminRoute = require('./routes/AdminRoute')
const mongoose = require('mongoose')
const cors = require('cors');



mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(()=>{
    console.log("database connected ");
  })
  .catch((error)=>{
    console.log(error);
  })
 app.use(cors({
    origin: process.env.CLIENT,
    methods: ["GET", "POST"],
  }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/',UserRouter)
app.use('/admin',AdminRoute)

app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT)
})