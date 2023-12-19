import { Routes, Route } from "react-router-dom";
import Home from "../pages/userPage/Home/Home";
import Register from "../pages/userPage/Register/Register";
import LoginPage from "../pages/userPage/Login/LoginPage";
import CartPage from "../pages/userPage/cart/CartPage";
import CheckoutPage from "../pages/userPage/checkout/CheckoutPage";
import SuccessPage from "../pages/userPage/success/SuccessPage";
import OrderPage from "../pages/userPage/cart/Order/OrderPage";
import Error500 from "../pages/error/Error500";
import Error from "../pages/error/Error";
import IsLogin from "../components/user/IsLogin";
import Single from "../pages/userPage/Single/Single";

// -------------------------------- main function  --------------------------------//
function User() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={(<><IsLogin/><Register /></>)} />
        <Route path="/login" exact element={(<><IsLogin/><LoginPage /></>)} />
        <Route path="/cart" exact element={<CartPage />} />
        <Route path="/checkout" exact element={<CheckoutPage />} />
        <Route path="/success" exact element={<SuccessPage />} />
        <Route path="/order" exact element={<OrderPage />} />
        <Route path="/error401" exact element={<Error />} />
        <Route path="/error500" exact element={<Error500 />} />
        <Route path="/single" exact element={<Single />} />
      </Routes>
    </div>
  );
}

export default User;
