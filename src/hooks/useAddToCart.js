import { useState, useCallback } from "react";
import { useCart } from "../context/CartContext.jsx";

/**
 * useAddToCart Hook
 *
 * Reusable hook for handling add to cart functionality.
 * Consolidates duplicate handleAddToCart logic across different pages.
 *
 * Features:
 *  - Shows feedback message when item is added to cart
 *  - Auto-clears message after 3 seconds
 *  - Returns addItem from CartContext for direct cart operations
 *
 * Returns:
 *  - cartMessage: Current feedback message
 *  - handleAddToCart: Function to call when adding item to cart
 *  - clearMessage: Function to manually clear the message
 */

const useAddToCart = () => {
  const [cartMessage, setCartMessage] = useState("");
  const { addItem } = useCart();

  /**
   * Handle adding item to cart
   * @param {string} itemName - Name of the item being added
   * @param {Object} itemData - Optional full item data for direct add
   */
  const handleAddToCart = useCallback((itemName, itemData = null) => {
    // If item data is provided, add directly to cart
    if (itemData) {
      addItem(itemData);
    }
    
    // Show feedback message
    setCartMessage(`Added "${itemName}" to cart!`);
    
    // Auto-clear message after 3 seconds
    setTimeout(() => {
      setCartMessage("");
    }, 3000);
  }, [addItem]);

  /**
   * Manually clear the cart message
   */
  const clearMessage = useCallback(() => {
    setCartMessage("");
  }, []);

  return {
    cartMessage,
    handleAddToCart,
    clearMessage,
  };
};

export default useAddToCart;
