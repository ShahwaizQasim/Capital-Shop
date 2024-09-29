import { useState } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import Loading from "./pages/loading";
import Home from "./pages/Home";
import AddProduct from "./pages/products/addProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Loading />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
