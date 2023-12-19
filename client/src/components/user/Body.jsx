import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productList } from "../../apis/connections/user";
import toast from "react-hot-toast";
import { useDispatch, } from "react-redux";
import { addCart } from "../../Redux/slices/cart";


function Body() {
    const  navigate = useNavigate()
    const dispatch = useDispatch()
  const containerRef = useRef(null);

const [product,setProduct] = useState([])
  const handleScrollClick = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollLeft += scrollAmount;
    }
  };
useEffect(()=>{
const data = async()=>{
   await productList()
   .then((res)=>{
   if(res.data.success == true){
      const pro = res.data.product
      setProduct(pro)
   }else{
    toast.success(`${res.data.message}`)
   }
   })
   .catch((err)=>{
    toast.error(err.message)
   })
}
data()
},[])

const handleCart=(x)=>{
   let data = {
    name:x.other.name,
    price:x.other.price,
    about:x.other.about,
    category:x.value,
    image:x.other.image,
    id:x.other.id,
    quantity:1
}
   dispatch(addCart(data))

} 
const handleBuy = (x)=>{
   
   const data = {
    category :x.category,
    name:x.value.name,
    about:x.value.about,
    price:x.value.price,
    image:x.value.image,
    id:x.value.id,
    quantity:1
   }
  
    console.log(data)
    navigate("/checkout", { state:[data] });
   
}
 return (
    <div className="w-full max-w-screen-lg mx-auto h-[700px] md:h-[1000px] overflow-y-scroll  py-2 px-2 no-scrollbar">
        {product.length>0 && product.map((value,index)=>(
            <div key={index}>
                <div>{value.category}</div>
                <div
                    className="flex  overflow-x-scroll scrollbar-hide h-full no-scrollbar "
                    ref={containerRef}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    onScroll={() => {}}
                >
                    <div className="flex h-full">
                        {value.data.map((val,index)=>(
                            <div key={index} className="w-[150px] md:w-[320px] h-[300px] md:h-[450px]  p-3 shadow-xl border border-gray-200 m-1">
                            <div>
                            <img
                                className="w-[300px] h-[100px] md:h-[260px] rounded-lg"
                                src={val.image}
                                alt=""
                            />
                            </div>
                            <div>
                            <h1 className="font-bold text-gray-700 text-center text-2xl" >
                                {val.name}
                            </h1>
                            </div>
                            <div className="w-full h-10 overflow-hidden py-3 flex justify-center items-center text-center">
                            <p>{val.about}</p>
                            </div>
                            <div className="w-full flex justify-center">
                            <h1 className="font-bold">$ {val.price}</h1>
                            </div>
                            <div className="w-full flex justify-evenly">
                            <button
                            onClick={()=>{handleBuy({value:val,category:value.category})}}
                                type="button"
                                className="my-2 text-white bg-gradient-to-r from-black via-black to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                               
                                Buy now
                               
                            </button>
                            <button
                                onClick={()=>{handleCart({value:value.category,other:val})}}
                                type="button"
                                className="my-2 bg-green-400 px-4 h-10  rounded-lg"
                            >
                                <img
                                className="w-5 h-5"
                                src="https://www.svgrepo.com/show/494438/shopping-cart.svg"
                                alt=""
                                />
                            </button>
                            </div>
                        </div>
                        ))}
               
                    
                
                    </div>
                </div>
            </div>
        )) }

      <button onClick={() => handleScrollClick("left")}>Scroll Left</button>
      <button onClick={() => handleScrollClick("right")}>Scroll Right</button>
    </div>
  );
}

export default Body;
