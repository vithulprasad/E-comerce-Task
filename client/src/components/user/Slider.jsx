import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { slider } from "../../apis/connections/user";
import { useNavigate } from "react-router-dom";

function Slider() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const data = async () => {
      await slider().then((res) => {
        if (res.data.success == true) {
          setProduct(res.data.products);
        }
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
  const contentStyle = {
    height: "360px",
    color: "#ff1493",
    lineHeight: "160px",
    textAlign: "center",
    background: "#e8a9e1",
  };
  return (
    <div
      id="default-carousel"
      className="relative w-full h-[380px]  max-w-screen-lg mx-auto "
      data-carousel="slide"
    >
      <Carousel autoplay>
        {product.map((value, index) => (
          <div key={index}>
            <div className="h-[380px]   flex md:flex bg-pink-200">
              <div className="md:w-1/2 h-full p-8 flex justify-center items-center pr-0">
                <div className="w-full h-1/2">
                  <h1 className="text-4xl font-semibold">{value.name}</h1>
                  <p className="text-slate-800">{value.about}</p>
                  <h1 className="text-4xl font-semibold text-pink-700">
                    ${value.price}
                  </h1>
                  <button
                  onClick={()=>{handleBuy(value)}}
                    type="button"
                    className="focus:outline-none h-9 text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 w-full h-full p-8 bg-pink-200 hidden   md:block pl-0">
                <img src={value.image} alt="" className="hidden md:block mt-10" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
