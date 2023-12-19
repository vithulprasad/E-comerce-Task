const User = require("../model/userModel");
const product = require("../model/productModel");
const category = require("../model/category");
const orders = require("../model/order");
const jwt = require("jsonwebtoken");

exports.AdminLogin = async (req, res) => {
  try {
    const { emailOrPass, password } = req.body.data;
    const findUser = await User.findOne({ email: emailOrPass });
    if (findUser) {
      if (findUser.isAdmin == true) {
        if (findUser.password == password) {
          const token = jwt.sign(
            { id: findUser._id, role: "admin" },
            process.env.SE
          );
          res.json({ success: true, message: "admin verified", token: token });
        } else {
          res.json({ success: false, message: "password is incorrect" });
        }
      } else {
        res.json({
          success: false,
          message: "wrong information for the admin",
        });
      }
    } else {
      res.json({ success: false, message: "no data found" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "error occured" });
  }
};
exports.isLogin = async (req, res) => {
  try {
    const tokenWithBarer = req.headers.authorization;
    if (tokenWithBarer) {
      const splitToken = tokenWithBarer.split(" ");
      const token = splitToken[1];
      const tokenVerify = jwt.verify(token, process.env.SE);
      if (tokenVerify.id) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } else {
      res.json({ success: false });
    }
    console.log(tokenWithBarer);
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "error occured" });
  }
};
exports.productAdd = async (req, res) => {
  try {
    console.log(req.body.data);
    const { image, description, name, price, categorys } = req.body.data;
    if (categorys) {
      const findCategory = await category.findOne({ name: categorys });
      if (!findCategory._id) {
        res.json({ success: false, message: "category not found" });
      } else {
        if (image == null || image == "") {
          res.json({ success: false, message: "image not added" });
        } else {
          if (description) {
            if (name) {
              if (price) {
                const products = new product({
                  name: name,
                  about: description,
                  price: price,
                  image: image,
                  category: findCategory._id,
                });
                await products.save();
                res.json({ success: true, message: "product added" });
              } else {
                res.json({ success: false, message: "price not added" });
              }
            } else {
              res.json({ success: false, message: "name not added" });
            }
          } else {
            res.json({ success: false, message: "description not added" });
          }
        }
      }
    } else {
      res.json({ success: false, message: "Category is not added" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "error occured" });
  }
};
exports.categoryAdd = async (req, res) => {
  try {
    const { color, name, image } = req.body.data;
    const findCategory = await category.findOne({ name: name });
    if (findCategory) {
      res.json({ success: false, message: "category is existing " });
    } else {
      if (color) {
        if (name) {
          if (image) {
            const categoryAdd = new category({
              name: name,
              color: color,
              image: image,
            });
            await categoryAdd.save();
            res.json({ success: true, message: "category added" });
          } else {
            res.json({ success: false, message: "image is not added" });
          }
        } else {
          res.json({ success: false, message: "name is not added" });
        }
      } else {
        res.json({ success: false, message: "color is not added" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "error occured" });
  }
};

exports.listCategories = async (req, res) => {
  try {
    const findCategories = await category.find();
    res.json({ success: true, message: "finded", category: findCategories });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "error occured" });
  }
};
exports.listProduct = async (req, res) => {
  try {
    const findProducts = await product.find();
    console.log(findProducts);
    res.json({ success: true, message: "finded", product: findProducts });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "error occured" });
  }
};
exports.userList =async(req,res)=>{
    try {
        const findUser = await User.find()
        const onlyUsers = findUser.filter((user)=>{
            return user.isAdmin == false
        })
        res.json({ success: true, message: "user list" ,users :onlyUsers });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: "error occured" });
    }
}
