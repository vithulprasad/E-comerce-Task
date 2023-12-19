import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { single } from "../../apis/connections/user";

function SingleCategory() {
  const location = useLocation();
  const [name, setName] = useState();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const id = location.state.id;
    const data = async () => {
      await single(id)
        .then((res) => {
          if (res.data.success == true) {
            setData(res.data.product);
            setName(res.data.product[0].category.name);
          } else {
            toast.error(`${res.data.message}`);
          }
        })
        .catch((err) => {
          toast.error(`${err.message}`);
        });
    };
    data();
  }, []);
  const handleBuy = (x) => {
    const data = {
      category: x.category._id,
      name: x.name,
      about: x.about,
      price: x.price,
      image: x.image,
      id: x._id,
      quantity: 1,
    };

    console.log(data);
    navigate("/checkout", { state: [data] });
  };
  return (
    <div className="w-full max-w-screen-lg mx-auto ">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className=" w-full h-[650px] grid grid-cols-3 overflow-y-scroll no-scrollbar">
        {data.map((val, indx) => (
          <div key={indx} className=" w-[300px] h-[350px] shadow-2xl p-3">
            <img className="w-full h-2/3" src={val.image} alt="" />
            <h1 className="text-center">{val.name}</h1>
            <h1 className="text-center">{val.about}</h1>
            <h1 className="text-center">{val.price}</h1>
            <button
              onClick={() => {
                handleBuy(val);
              }}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            >
              Buy now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleCategory;
