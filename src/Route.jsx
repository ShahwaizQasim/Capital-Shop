import { useContext } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import Home from "./pages/Home";
import AddProduct from "./pages/products/addProduct";
import UserProfile from "./userProfile/userprofile";
import { AuthContext } from "./context/AuthContext";
import ProductDetail from "./pages/products/productDetail";
import AllProducts from "./pages/products/allProduct";
import Cart from "./pages/products/cart";

function App() {
  const [user, setUser] = useContext(AuthContext);
  console.log("user", user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Loading />} /> */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />

         <Route path="/">
          <Route index element={<Home />} />
          </Route>

          
          
            <Route path="/addProduct" element={user?.isLogin? <AddProduct />: <Navigate to={'/SignIn'}/>} />
            <Route path="/userProfile" element={user?.isLogin? <UserProfile />: <Navigate to={'/SignIn'}/>} />
            <Route path="/ProductDetail/:id" element={user?.isLogin? <ProductDetail />: <Navigate to={'/SignIn'}/>}/>
            <Route path="/AllProducts" element={user?.isLogin? <AllProducts />: <Navigate to={'/SignIn'}/>} />
            <Route path="/Cart" element={user?.isLogin? <Cart />: <Navigate to={'/SignIn'}/>}></Route>
      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
