const express = require('express')
const Admin_route = express()
const AdminController = require('../controller/AdminController')

Admin_route.post('/login',AdminController.AdminLogin)
Admin_route.get('/isLogin',AdminController.isLogin)
Admin_route.post('/productAdd',AdminController.productAdd)
Admin_route.post('/categoryAdd',AdminController.categoryAdd)
Admin_route.get('/categoryList',AdminController.listCategories)
Admin_route.get('/productList',AdminController.listProduct)
Admin_route.get('/userList',AdminController.userList)




module.exports = Admin_route