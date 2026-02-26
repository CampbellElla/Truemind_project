import { useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar.jsx";
import Footer from "../ui/Footer.jsx";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";

/**
 * Orders Component - My Orders/Cart Page
 *
 * Displays all orders in the cart with quantity controls,
 * remove functionality, and checkout option.
 *
 * Mobile Responsive:
 * - Cart items stack vertically on mobile
 * - Quantity controls are larger and touch-friendly
 * - Better spacing and layout for small screens
 */

const Orders = () => {
  const { cart, updateQty, removeItem } = useCart();
  
  const subtotal = useMemo(
    () => cart.reduce((s, it) => s + (it.unitPrice || 0) * it.qty, 0),
    [cart],
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-16">
      <Navbar />

      <main className="flex-grow w-full px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Your Cart</h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {cart.length === 0 ? (
              <div className="p-8 sm:p-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <FiPlus className="text-2xl sm:text-3xl text-gray-400" />
                </div>
                <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3 text-center">
                  Your cart is empty
                </p>
                <p className="text-sm sm:text-base text-gray-500 mb-6 text-center">
                  Looks like you haven't added any items yet
                </p>
                <Link
                  to="/menu"
                  className="block w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded text-center mx-auto"
                  style={{ maxWidth: '200px' }}
                >
                  Explore Menu
                </Link>
              </div>
            ) : (
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="divide-y divide-gray-100">
                  {cart.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="py-4 sm:py-6 first:pt-0 last:pb-0"
                    >
                      {/* Mobile-first: Stacked layout */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        {/* Image */}
                        <div className="flex-shrink-0 self-start sm:self-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                          />
                        </div>

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                            {item.description || item.options?.summary}
                          </p>
                          
                          {/* Price on mobile */}
                          <div className="font-bold text-orange-500 mt-2 sm:hidden">
                            ₦{((item.unitPrice || 0) * item.qty).toLocaleString()}
                          </div>
                        </div>

                        {/* Quantity Controls - Mobile responsive */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 mt-2 sm:mt-0">
                          {/* Quantity Controls - + qty - order */}
                          <div className="flex items-center gap-2 sm:gap-3">
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-600 text-sm sm:text-base"
                            >
                              <FiPlus />
                            </button>
                            <span className="w-12 text-center font-medium text-sm sm:text-base tabular-nums">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-600 text-sm sm:text-base"
                            >
                              <FiMinus />
                            </button>
                          </div>

                          {/* Price on desktop */}
                          <div className="hidden sm:block font-bold text-orange-500 text-sm sm:text-base ml-2">
                            ₦{((item.unitPrice || 0) * item.qty).toLocaleString()}
                          </div>

                          {/* Delete Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <FiTrash2 className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6">
                  <Link
                    to="/menu"
                    className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium"
                  >
                    + Add more items
                  </Link>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
                    <div className="text-base font-medium text-gray-600 order-2 sm:order-1">
                      Subtotal
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-orange-500 order-1 sm:order-2">
                      ₦{subtotal.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded text-base sm:text-lg">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
