import { Link } from "react-router-dom";
import LogoutButton from "../../../components/admin/LogoutButton";
import {  useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { categoryList, productAdd, productList } from "../../../apis/connections/Admin";


function ProductList() {
  const [add, setAdd] = useState(false);
  const [image,setImage] = useState()
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [category,setCategory] =useState([])
  const [selectCategory,setSelectCategory] = useState("")
  const [product,setProduct] = useState([])

  const handleImage = async(e)=>{
    try {
        toast.success('entering')
        const file = e.target.files
        const formData = new FormData();
        formData.append("file", file[0]);
        formData.append(
          "upload_preset",
          import.meta.env.VITE_APP_CLOUDINARY_NAME
        );

        const res = await axios.post(
          import.meta.env.VITE_APP_CLOUDINARY_PATH,
          formData
        );

        const imageUrl = res.data.secure_url;
      

        setImage(`${imageUrl}`);
        toast.success(imageUrl);
    } catch (error) {
        console.log(error.message);
    }
  }
  const handleFormSubmit = async(e)=>{ 
    e.preventDefault();
    const data = {
        image:image,
        name:name,
        description:description,
        price:price,
        categorys:selectCategory
    }
    await productAdd(data)
    .then((res)=>{
  if(res.data.success == true){
    toast.success("product is added successfully")
  }else{
    toast.error(`${res.data.message}`)
  }
    })
  }

  useEffect(()=>{
    const data = async()=>{
        await categoryList()
        .then((res)=>{
            if(res.data.success == true){
                const cateGorys = res.data.category
                setCategory(cateGorys)
            }else{
                toast.error(`${res.data.message}`)
            }
         
        })
        .catch((err)=>{
            toast.error(`${err.message}`)
        })
        await productList()
        .then((res)=>{
            if(res.data.success == true){
                const data = res.data.product
                setProduct(data)
                console.log(data);
            }else{
            toast.error(`${res.data.message}`)
            }
        })
       .catch((err)=>{
        toast.error(`${err.message}`)
       })
    }
    data()
  },[])
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="p-2">
          <ul>
            <Link to={"/admin"}>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Dashboard
              </li>
            </Link>
            <Link to={"/admin/orders"}>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">Orders</li>
            </Link>
            <Link to={"/admin/products"}>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Products
              </li>
            </Link>

            <Link to={"/admin/category"}>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Category
              </li>
            </Link>
            <Link to={"/admin/users"}>
              <li className="py-2 hover:bg-gray-700 cursor-pointer">Users</li>
            </Link>
            <li>
              {" "}
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        <div className="bg-white p-4 rounded shadow">
          {add ? (
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>name</th>
                  <th>about</th>
                  <th>price</th>
                  <th>image</th>

                </tr>
              </thead>
              {product.length > 0 && product.map((value,index)=>(
                <tbody key={index}>
                    <tr>
                        <td className="text-center">{value.name}</td>
                        <td className="text-center">{value.about}</td>
                        <td className="text-center">{value.price}</td>
                        <td className="flex justify-center"><img className="w-20 h-20" src={value.image} alt="" /></td>
                    </tr>
                </tbody>
              ))}
             
            </table>
          ) : (
            <form className="max-w-sm mx-auto" onSubmit={handleFormSubmit}>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="text"
                   value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="file"
                  onChange={(e)=>{
                    handleImage(e)
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e)=>{setPrice(e.target.value)}}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="price"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}
                
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="discription"
                  required
                />
              </div>
              <div className="mb-5">
              <select
                onChange={(e) => {
                    setSelectCategory(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                {category.map((value, indx) => (
                    <option key={indx} value={value.name}>
                        {value.name}
                    </option>
                ))}
                </select>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          )}

          <button
            onClick={() => {
              add ? setAdd(false) : setAdd(true);
            }}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
