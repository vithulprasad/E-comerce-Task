import { useEffect, useRef, useState } from "react";
import { categoryList } from "../../apis/connections/user";
import toast from "react-hot-toast";
import tinycolor from "tinycolor2";
import { useNavigate } from "react-router-dom";

function Category() {
  const containerRef = useRef(null);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const handleScrollClick = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollLeft += scrollAmount;
    }
  };
  useEffect(() => {
    const data = async () => {
      await categoryList()
        .then((res) => {
          if (res.data.success == true) {
            const cat = res.data.category;
            setCategory(cat);
          } else {
            toast.success(`${res.data.message}`);
          }
        })
        .catch((err) => [toast.error(err.message)]);
    };
    data();
  }, []);
  const handleSingle = (x) => {
    navigate("/single", { state: { id: x } });
  };
  return (
    <div className="w-full  max-w-screen-lg mx-auto h-28 py-2 px-2 overflow-hidden">
      <div
        className="flex overflow-x-scroll no-scrollbar"
        ref={containerRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={() => {}}
      >
        <div className="flex">
          {category.length > 0 &&
            category.map((val, index) => (
              <div
                key={index}
                className={`w-[150px] md:w-[300px] h-full  flex mr-7 rounded shadow-lg`}
                style={{
                  backgroundColor: tinycolor(val.color).lighten(20).toString(),
                }}
                onClick={() => {
                  handleSingle(val._id);
                }}
              >
                <div className="w-2/3 h-full flex items-center justify-center">
                  <h1 className="text-2xl font-bold font-serif">{val.name}</h1>
                </div>
                <div className="p-1">
                  <img className="w-[90px]" src={val.image} alt="" />
                </div>
              </div>
            ))}
        </div>
      </div>
      <button onClick={() => handleScrollClick("left")}>Scroll Left</button>
      <button onClick={() => handleScrollClick("right")}>Scroll Right</button>
    </div>
  );
}

export default Category;
