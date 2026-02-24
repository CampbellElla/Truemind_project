import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      // merge if same id and same options
      const matchIndex = prev.findIndex(
        (c) =>
          c.id === item.id &&
          JSON.stringify(c.options || {}) ===
            JSON.stringify(item.options || {}),
      );
      if (matchIndex > -1) {
        const next = [...prev];
        next[matchIndex] = {
          ...next[matchIndex],
          qty: next[matchIndex].qty + item.qty,
        };
        return next;
      }
      return [...prev, item];
    });
  };

  const updateQty = (cartItemId, qty) => {
    setCart((prev) =>
      prev.map((c) => (c.id === cartItemId ? { ...c, qty } : c)),
    );
  };

  const removeItem = (cartItemId) => {
    setCart((prev) => prev.filter((c) => c.id !== cartItemId));
  };

  const clear = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, updateQty, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
