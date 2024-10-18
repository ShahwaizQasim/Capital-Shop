import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState();

  const AddItemToCart = (item) => {
    const arr = cartItems;
    //  item add nhi hai, tw add krwa do
    // agr item add hai, tw quantity bharado

    //check if item exist
    const ProductIndex = cartItems.findIndex((data) => data.id == item.id);
    if (ProductIndex === -1) {
      // -1 product array me nahi hai
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[ProductIndex].quantity++;
    }
    setCartItems([...arr]);
  };

  const removeItemFromCart = (id) => {
    const arr = cartItems;
    const ProductIndex = cartItems.findIndex((data) => data.id == id);
    arr.splice(ProductIndex, 1);
    setCartItems([...arr]);
  };

  const isItemAdded = (id) => {
    const arr = cartItems;
    const ProductIndex = cartItems.findIndex((data) => data.id == id);
    if (ProductIndex === -1) {
      return null;
    } else {
      return arr[ProductIndex];
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, AddItemToCart, removeItemFromCart, isItemAdded }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
