import { Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/adminPage/Home/AdminHome';
import AdminLogin from '../pages/adminPage/Login/AdminLogin';
import CategoryList from '../pages/adminPage/Category/CategoryList';
import Orders from '../pages/adminPage/order/Orders';
import ProductList from '../pages/adminPage/Product/ProductList';
import UserList from '../pages/adminPage/UserList/UserList';
import Isloged from '../components/admin/Isloged';


function Admin() {


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<AdminHome />}
        />
           <Route
          path="/login"
          element={(<><Isloged/><AdminLogin /></>)}
        />
    
    <Route
          path="/category"
          element={<CategoryList />}
        />
                  <Route
          path="/orders"
          element={<Orders />}
        />
                  <Route
          path="/products"
          element={<ProductList />}
        />
                  <Route
          path="/users"
          element={<UserList />}
        />
    
      </Routes>
    </div>
  );
}

export default Admin;
