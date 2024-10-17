import { useContext } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import Home from "./pages/Home";
import AddProduct from "./pages/products/addProduct";
import UserProfile from "./userProfile/userprofile";
import ProductDetail from "./pages/products/productDetail";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Loading />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />

          <Route
            path="/"
            element={user?.isLogin ? <Home /> : <Navigate to={"/signIn"} />}
          >
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/ProductDetail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
