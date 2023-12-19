const User = require('../model/userModel')
const product = require('../model/productModel')
const category = require('../model/category')
const orders = require('../model/order')
const jwt = require('jsonwebtoken')

exports.login = async(req,res)=>{
    try {
        console.log(req.body.data);
    const {emailOrPass,password} = req.body.data
    const findUser = await User.findOne({email:emailOrPass})
    if(findUser){
       if(emailOrPass){
           if(password){
                  if(findUser.password == password){
                      const createJWT = jwt.sign({id:findUser._id,role:"user"}, process.env.SE)
                      res.json({success:true,message:"successfully logind",token:createJWT,name:findUser.name})
                  }else{
                    res.json({success:false,message:"password is wrong"})
                  }
           }else{
            res.json({success:false,message:'no password found'})

           }
       }else{
        res.json({success:false,message:'no email found'})
       }
    }else{
        res.json({success:false,message:'no user found'})
    }
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}
exports.register = async(req,res)=>{
    try {
        const {password,phone,email,name} = req.body.data
        const findUserIsExisting = await User.findOne({email:email})
        console.log(findUserIsExisting);
        if(findUserIsExisting){
            res.json({success:false,message:'user is already registerd'})
        }else{
            if(password){
                 if(phone){
                    if(name){
                           const user = new User({
                            name:name,
                            phone:phone,
                            email:email,
                            password:password
                           })
                           await user.save()
                           res.json({success:true,message:"user is created"})
                    }else{
                        res.json({success:false,message:'no name entered'})
                    }
                 } else{
                    res.json({success:false,message:'no phone entered'})
                 } 
            }else{
                res.json({success:false,message:'no password added'})
            }
        }
        console.log('working of user register',req.body);
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

exports.isLogin = async(req,res)=>{
   try {
        const tokenWithBarer = req.headers.authorization
        if(tokenWithBarer){
            const token = tokenWithBarer.split(' ')
            const exactToken = token[1]
            const decode = jwt.verify(exactToken,process.env.SE)
           if(decode.id){
            res.json({success:true})
           }else{
            res.json({success:false})
           }
        }else{
            res.json({success:false})
        }
       
   } catch (error) {
      
    console.log(error.message);
    res.json({success:false})
   }
}
exports.categoryList = async(req,res)=>{
   try {
        const findCategory =  await category.find()
        res.json({success:true,category:findCategory})
   } catch (error) {
    console.log(error.message);
    res.json({success:false})
   }
}
exports.productList = async (req, res) => {
    try {
      const list = await product.find().populate('category');
  
      const list_data = Array.from(new Set(list.map((item) => item.category.name)));
  
      const createObj = list_data.map((item) => {
        const data = list
          .filter((val) => val.category.name === item)
          .map((val) => ({
            name: val.name,
            about: val.about,
            price: val.price,
            image: val.image,
            id:val._id
          }));
  
        return {
          category: item,
          data: data,
        };
      });
  
      console.log(createObj, '-----');
      res.json({ success: true ,product:createObj });
    } catch (error) {
      console.log(error.message);
      res.json({ success: false  });
    }
  };
  
exports.order = async(req,res)=>{
   try {
        const {data,address}=req.body.data
        const tokenWithBarer = req.headers.authorization
        if(tokenWithBarer){
            const token = tokenWithBarer.split(' ')
            const exactToken = token[1]
            const decode = jwt.verify(exactToken,process.env.SE)
           if(decode.id){
         

              await data.forEach(element => {
                const newOrder = new orders({
                  userId: decode.id,
                  productId: element.id,
                  totalPrice: element.price*element.quantity,
                  address: address,
                  date: new Date()  
                });
                newOrder.save();
              });
              res.json({success:true})
           }else{
            res.json({success:false})
           }
        }else{
            res.json({success:false})
        }
        
   } catch (error) {
       console.log(error.message);
   }
}
exports.getOrder = async(req,res)=>{
    try {
        const tokenWithBarer = req.headers.authorization
        if(tokenWithBarer){
            const token = tokenWithBarer.split(' ')
            const exactToken = token[1]
            const decode = jwt.verify(exactToken,process.env.SE)
            if(decode.id){
                const findOrder = await orders.find({userId: decode.id}).populate("productId")
              
                res.json({success:true,message:"user is fount",order:findOrder})
            }else{
                res.json({success:false,message:"user invalid"})
            }
        }else{
         res.json({success:false,message:"user invalid"})
        }
    } catch (error) {
        console.log(error.message);
        res.json({success:false})
    }
 }
 exports.single = async(req,res)=>{
    try {
 const id = req.query.id;
 const find =  await product.find({category:id}).populate('category')
 res.json({success:true,product:find})
    } catch (error) {
        console.log(error.message);
        res.json({success:false})
    }
 }
 exports.slider = async (req, res) => {
    try {
       
        const products = await product.find().populate('category');

        const shuffledProducts = products.sort(() => Math.random() - 0.5);

        const randomProducts = shuffledProducts.slice(0, 4);

        res.json({ success: true, products: randomProducts });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false });
    }
};
