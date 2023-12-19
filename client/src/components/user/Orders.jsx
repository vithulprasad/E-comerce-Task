import { useEffect, useState } from "react";
import { getOrder } from "../../apis/connections/user";
import toast from "react-hot-toast";

function Orders() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const val = async () => {
      await getOrder()
        .then((res) => {
          if (res.data.success == true) {
            setData(res.data.order);
          } else {
            toast.error(`${res.data.message}`);
          }
        })
        .catch((err) => {
          toast.error(`${err.message}`);
        });
    };
    val();
  }, []);
  return (
    <div className="bg-gray-100 h-[600px] overflow-y-scroll no-scrollbar w-full max-w-screen-lg mx-auto ">
      <div className="container mx-auto p-8 ">
        <h1 className="text-3xl font-semibold mb-6 ">Order Summary</h1>
        <div className="w-full max-w-screen-lg mx-auto h-[400px] bg-pink-200 my-1">
  
       <div className="h-full flex md:flex bg-pink-200">

        <div className="md:w-1/2 h-full p-8 flex justify-center items-center pr-0">
          <div className="w-full h-1/2">
            <h1 className="text-2xl font-semibold">X-Box For Your Living Room</h1>
        <p className="text-slate-800">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
             <h1 className="text-4xl font-semibold text-pink-700">$600</h1>
             <button type="button" className="focus:outline-none h-9 text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900">Buy Now</button>
           </div>
         </div>
         <div className="md:w-1/2 w-full h-full p-8 bg-pink-200 hidden md:block pl-0">
           <img src="./public/ff3d2913a262a06a55318b63d869f2ce-removebg-preview.png" alt="" className="hidden md:block" />
         </div>
       </div>
     </div> 
        {data.length > 0 &&
          data.map((value, index) => (
            <div key={index} className="mt-8 bg-white p-8 rounded shadow">
              <h2 className="text-2xl font-semibold mb-4">
                {value.productId.name}
              </h2>
              <div className="w-full flex  justify-between">
                <div>
                  <img
                    className="w-[100px] h-[100px]"
                    src={value.productId.image}
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between mb-4">
                    <span>Subtotal:</span>
                    <span>${value.totalPrice}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Shipping:</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Total:</span>
                    <span className="text-xl font-semibold">
                      ${value.totalPrice + 5}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Orders;
