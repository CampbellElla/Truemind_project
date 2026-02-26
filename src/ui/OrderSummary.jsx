import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { FiX, FiShoppingCart } from "react-icons/fi";

/**
 * OrderSummary Component
 *
 * Displays a summary of the currently selected food item.
 * Appears when user clicks on any food item in Explore, Menu, or FoodDetails pages.
 * Shows item details, allows quick add to cart, and navigation to food details.
 *
 * Props:
 *  - onClose: Function to close the summary panel
 */

const OrderSummary = ({ onClose }) => {
  const { selectedItem, clearSelectedItem, addItem, cartItemCount } = useCart();
  const navigate = useNavigate();

  // Don't render if no item is selected
  if (!selectedItem) return null;

  /**
   * Handle quick add to cart from summary
   */
  const handleQuickAdd = () => {
    addItem({
      id: selectedItem.id,
      name: selectedItem.name,
      image: selectedItem.image,
      description: selectedItem.description,
      unitPrice: selectedItem.priceValue || 0,
      qty: 1,
      options: {},
    });
    clearSelectedItem();
    if (onClose) onClose();
  };

  /**
   * Navigate to food details page
   */
  const handleViewDetails = () => {
    navigate(`/food/${selectedItem.id}`);
  };

  /**
   * Close the summary and clear selected item
   */
  const handleClose = () => {
    clearSelectedItem();
    if (onClose) onClose();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:left-auto md:right-4 md:w-96 bg-white shadow-2xl rounded-t-2xl md:rounded-xl z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-orange-500 text-white">
        <div className="flex items-center gap-2">
          <FiShoppingCart className="text-lg" />
          <span className="font-semibold">Order Summary</span>
        </div>
        <button
          onClick={handleClose}
          className="p-1 hover:bg-orange-600 rounded transition-colors"
        >
          <FiX className="text-xl" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Food Item Info */}
        <div className="flex gap-4 mb-4">
          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">
              {selectedItem.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {selectedItem.description}
            </p>
            <div className="text-lg font-bold text-orange-500 mt-1">
              {selectedItem.price}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleViewDetails}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded transition-colors"
          >
            View Details
          </button>
          <button
            onClick={handleQuickAdd}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Add to Cart
          </button>
        </div>

        {/* Cart Count Indicator */}
        {cartItemCount > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100 text-center text-sm text-gray-500">
            You have {cartItemCount} item{cartItemCount !== 1 ? "s" : ""} in
            your cart
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
