import { Link } from 'react-router-dom'
import LogoutButton from '../../../components/admin/LogoutButton'
import { useEffect, useState } from 'react'
import { userList } from '../../../apis/connections/Admin'
import toast from 'react-hot-toast'

function UserList() {
    const [user,setUser] = useState([])
    useEffect(()=>{
       const data = async()=>{
           await userList()
           .then((res)=>{
            if(res.data.success == true){
                const useres = res.data.users
                setUser(useres)
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
            
      
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>name</th>
                  <th>about</th>
                  <th>price</th>
                  <th>password</th>

                </tr>
              </thead>
              {user.length > 0 && user.map((value,index)=>(
                <tbody key={index}>
                    <tr className='my-2'>
                        <td className="text-center">{value.name}</td>
                        <td className="text-center">{value.email}</td>
                        <td className="text-center">{value.phone}</td>
                        <td className="text-center">{value.password}</td>
                    </tr>
                </tbody>
              ))}
             
            </table>
          </div>
        </div>
  )
}

export default UserList
