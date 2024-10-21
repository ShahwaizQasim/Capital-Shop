import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    const item = localStorage.getItem("cartItems");
    if (item) {
      setCartItems([...JSON.parse(item)]);
      setIsLoaded(true);
    }
  }, []);

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

  const LessItemQuantityFromCart = (id) => {
    const arr = cartItems;
    const ProductIndex = cartItems.findIndex((data) => data.id == id);
    arr[ProductIndex].quantity--;
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
      value={{
        cartItems,
        AddItemToCart,
        removeItemFromCart,
        isItemAdded,
        LessItemQuantityFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
