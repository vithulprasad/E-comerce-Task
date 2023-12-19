import { adminAxiosInstance } from "../axios";

const login =async (data)=>{
    try {
       if(data){
        const response=await adminAxiosInstance.post(`login`,{data})
        return response
       }
    
    } catch (error) {
        console.log(error.message);
    }
}

const isLogin =async ()=>{
    try {
        const response=await adminAxiosInstance.get(`isLogin`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const productAdd =async (data)=>{
    try {
        const response=await adminAxiosInstance.post(`productAdd`,{data})
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const productList =async (data)=>{
    try {
        const response=await adminAxiosInstance.get(`productList?${{data}}`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const categoryAdd =async (data)=>{
    try {
        const response=await adminAxiosInstance.post(`categoryAdd`,{data})
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const categoryList =async ()=>{
    try {
        const response=await adminAxiosInstance.get(`categoryList`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}
const userList =async ()=>{
    try {
        const response=await adminAxiosInstance.get(`userList`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}

export{

    login,
    isLogin,
    productAdd,
    productList,
    categoryAdd,
    categoryList,
    userList



}