const express = require("express")
const user_route = express()
const UserController = require('../controller/UserController')

user_route.get('/isLogin',UserController.isLogin)
user_route.post('/login',UserController.login)
user_route.post('/register',UserController.register)
user_route.get('/categoryList',UserController.categoryList)
user_route.get('/productList',UserController.productList)
user_route.post('/order',UserController.order)
user_route.get('/getOrder',UserController.getOrder)
user_route.get('/single',UserController.single)
user_route.get('/slider',UserController.slider)


module.exports = user_route