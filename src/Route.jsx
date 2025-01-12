import { useContext } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import Home from "./pages/Home";
import AddProduct from "./pages/products/addProduct";
import { AuthContext } from "./context/AuthContext";
import ProductDetail from "./pages/products/productDetail";
import AllProducts from "./pages/products/allProduct";
import Cart from "./pages/products/cart";
import AdminPanel from "./pages/admin/adminpanel";
import ViewUsers from "./pages/admin/viewUsers";
import ViewOrders from "./pages/admin/vieworders";
import UserProducts from "./pages/admin/userProducts";
import Dashboard from "./pages/admin/dashboard";
import AddOrder from "./pages/products/addOrder";
import UserProfile from "./pages/userProfile/userProfile";
import AdminLogin from "./pages/auth/adminLogin";

function App() {
  const [user, setUser] = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Loading />} /> */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/userProfile" element={<UserProfile />} />

          <Route
            path="/addProduct"
            element={
              user?.isLogin ? <AddProduct /> : <Navigate to={"/SignIn"} />
            }
          />
          <Route
            path="/ProductDetail/:id"
            element={
              user?.isLogin ? <ProductDetail /> : <Navigate to={"/SignIn"} />
            }
          />
          <Route
            path="/AllProducts"
            element={
              user?.isLogin ? <AllProducts /> : <Navigate to={"/SignIn"} />
            }
          />
          <Route
            path="/addToCart"
            element={user?.isLogin ? <Cart /> : <Navigate to={"/SignIn"} />}
          />
          <Route
            path="/orderNow/:id"
            element={user?.isLogin ? <AddOrder /> : <Navigate to={"/SignIn"} />}
          />

         <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminPanel" element={<AdminPanel />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="viewUsers" element={<ViewUsers />} />
            <Route path="viewOrders" element={<ViewOrders />} />
            <Route path="viewProducts" element={<UserProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
