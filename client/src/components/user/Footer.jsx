
function Footer() {
  return (
    <div className=" w-full max-w-screen-lg mx-auto h-[230px] bg-pink-200 flex justify-center">
       <div className="w-[300px] h-full flex flex-col p-3 mt-8 gap-1">
          <h1 className="font-semibold text-2xl">{`LET'`}S STAY IN TOUCH</h1>
          <h1 className=" text-gray-500">Get update on sales specials and more</h1>
          <input placeholder="Enter your email" className=" border border-gray-200 h-9 p-3 bg-slate-100" type="text" />
          <button type="button" className="focus:outline-none h-9 w-20 flex justify-center  items-center text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900">send</button>
       </div>
    </div>
  )
}

export default Footer
