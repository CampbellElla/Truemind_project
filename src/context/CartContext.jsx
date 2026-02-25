import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Track the currently selected/clicked food item for Order Summary
  const [selectedItem, setSelectedItem] = useState(null);

  /**
   * Add item to cart
   * If same item with same options exists, increment quantity
   */
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

  /**
   * Update quantity of an item in cart
   */
  const updateQty = (cartItemId, qty) => {
    setCart((prev) =>
      prev.map((c) => (c.id === cartItemId ? { ...c, qty } : c)),
    );
  };

  /**
   * Remove item from cart
   */
  const removeItem = (cartItemId) => {
    setCart((prev) => prev.filter((c) => c.id !== cartItemId));
  };

  /**
   * Clear all items from cart
   */
  const clear = () => setCart([]);

  /**
   * Set the selected item (clicked food item for Order Summary)
   * This is called when user clicks on any food item
   */
  const selectItem = (item) => {
    setSelectedItem(item);
  };

  /**
   * Clear the selected item
   */
  const clearSelectedItem = () => {
    setSelectedItem(null);
  };

  /**
   * Calculate total items in cart
   */
  const cartItemCount = cart.reduce((total, item) => total + item.qty, 0);

  /**
   * Calculate total price of cart
   */
  const cartTotal = cart.reduce(
    (total, item) => total + item.unitPrice * item.qty,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        updateQty,
        removeItem,
        clear,
        selectedItem,
        selectItem,
        clearSelectedItem,
        cartItemCount,
        cartTotal,
      }}
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
