
import { Link } from 'react-router-dom'
import LogoutButton from '../../../components/admin/LogoutButton'

function ProductAdd() {
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="p-2">
              <ul>
             
               
             
                
                <Link to={'/admin'}>
                <li className="py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                </Link>
                <Link to={'/admin/orders'}>
                <li className="py-2 hover:bg-gray-700 cursor-pointer">Orders</li>
                </Link>
                <Link to={'/admin/products'}>
                <li className="py-2 hover:bg-gray-700 cursor-pointer">Products</li>
                </Link>
               
                <Link to={'/admin/category'}>
                <li className="py-2 hover:bg-gray-700 cursor-pointer">Category</li>
                </Link>
                <Link to={'/admin/users'}>
                <li className="py-2 hover:bg-gray-700 cursor-pointer">Users</li>
                </Link>
                <li>    <LogoutButton/>
</li>
              </ul>
            </nav>
    </div>


    <div className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      

      <div className="bg-white p-4 rounded shadow">
                {add ?  <table className="table-auto w-full">
                    <thead>
                        <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        </tr>
                        <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                        </tr>
                        <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        </tr>
                    </tbody>
                    </table>
                :<form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-5">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="file"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div className="flex items-start mb-5">
                 
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>}
          
                  <button onClick={()=>{
                    add ? setAdd(false) :setAdd(true)
                  }} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add product</button>
               

            </div>
    </div>
  </div>
  )
}

export default ProductAdd
