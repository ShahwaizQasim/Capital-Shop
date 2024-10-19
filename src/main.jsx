import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Route.jsx";
import "./index.css";
import "./App.css";
import AuthContextProvider from "./context/AuthContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
      <App />
      </CartContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
