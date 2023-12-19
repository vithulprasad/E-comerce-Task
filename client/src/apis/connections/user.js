
import { userAxiosInstance } from "../axios"


const register =async (data)=>{
    try {
       if(data){
        const response=await userAxiosInstance.post(`register`,{data})
        return response
       }
    
    } catch (error) {
        console.log(error.message);
    }
}
const login =async (data)=>{
    try {
    if(data){
        const response=await userAxiosInstance.post(`login`,{data})
        return response
    }
      
    } catch (error) {
        console.log(error.message);
    }
}
const isLogIn = async ()=>{
    try {
        
       const response=await userAxiosInstance.get(`isLogin`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const categoryList = async ()=>{
    try {
        
       const response=await userAxiosInstance.get(`categoryList`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const productList = async ()=>{
    try {

       const response=await userAxiosInstance.get(`productList`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const order = async (data)=>{
    try {

       const response=await userAxiosInstance.post(`order`,{data})
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const getOrder = async ()=>{
    try {
       const response=await userAxiosInstance.get(`getOrder`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const single = async(data)=>{
    try {
        const response=await userAxiosInstance.get(`single?id=${data}`)
         return response
     } catch (error) {
         console.log(error.message);
     }
}
const slider = async()=>{
    try {
        const response=await userAxiosInstance.get(`slider`)
         return response
     } catch (error) {
         console.log(error.message);
     }
}
export{
    register,
    login,
    isLogIn,
    categoryList,
    productList,
    order,
    getOrder,
    single,
    slider
}