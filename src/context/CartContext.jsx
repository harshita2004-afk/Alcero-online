import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
 const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const addToCart = (product) => {
  setCart((prev) => {
    const existingItem = prev.find(
      (item) =>
        item.name === product.name &&
        item.selectedColor === product.selectedColor
    );

    if (existingItem) {
      return prev.map((item) =>
        item.name === product.name &&
        item.selectedColor === product.selectedColor
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
    
  });
};
const increaseQuantity = (name, color) => {
  setCart((prev) =>
    prev.map((item) =>
      item.name === name && item.selectedColor === color
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (name, color) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.name === name && item.selectedColor === color
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

const removeItem = (name, color) => {
  setCart((prev) =>
    prev.filter(
      (item) =>
        !(item.name === name &&
          item.selectedColor === color)
    )
  );
};

const clearCart = () => {
  setCart([]);
};

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}



export const useCart = () => useContext(CartContext);