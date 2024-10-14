import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const getProducts = () => {
    axios.get(`http://localhost:9000/products`).then((response) => {
      setProducts(response.data);
    });
  };

  const addItemToCart = (id) => {
    const tempProducts = [...products];
    const itemToAdd = tempProducts.find((product) => product.id === id);

    if (itemToAdd) {
      setCartItems((prevItems) => {
        // Check if the item is already in the cart
        const existingItemIndex = prevItems.findIndex((item) => item.id === id);

        if (existingItemIndex >= 0) {
          // Item exists, update the quantity
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += 1; // Increment quantity
          return updatedItems;
        } else {
          // Item doesn't exist, add it with quantity 1
          return [...prevItems, { ...itemToAdd, quantity: 1 }];
        }
      });
    }
  };

  const deleteCartItem = (id) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];

        // Decrement the quantity
        updatedItems[existingItemIndex].quantity -= 1;

        // If quantity reaches zero, remove the item
        if (updatedItems[existingItemIndex].quantity <= 0) {
          return updatedItems.filter((item) => item.id !== id);
        }

        return updatedItems; // Return updated items with decremented quantity
      }

      return prevItems; // If item does not exist, return unchanged
    });
  };

  const getCartItems = () => {
    return cartItems;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{
        products,
        addItemToCart,
        getCartItems,
        cartItems,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
