
import { Link } from 'react-router-dom'
import LogoutButton from '../../../components/admin/LogoutButton'

function Orders() {
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
                <li>          <LogoutButton/>
</li>
              </ul>
            </nav>
          </div>
    
  
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            
      
            <div className="bg-white p-4 rounded shadow">
              <p>Welcome to the admin orders!</p>
            </div>
          </div>
        </div>
  )
}

export default Orders
