import { useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar.jsx";
import Footer from "../ui/Footer.jsx";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";

const Orders = () => {
  const { cart, updateQty, removeItem } = useCart();

  const subtotal = useMemo(
    () => cart.reduce((s, it) => s + (it.unitPrice || 0) * it.qty, 0),
    [cart],
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow w-full px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8 text-gray-900">
            Your Cart
          </h1>

          {/* Cart Container */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {cart.length === 0 ? (
              /* Empty Cart State */
              <div className="p-8 sm:p-12">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <FiPlus className="text-3xl text-gray-400" />
                </div>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Looks like you haven't added any items yet
                </p>
                <Link
                  to="/menu"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Explore Menu
                </Link>
              </div>
            ) : (
              /* Cart Items - ADJUSTED: Reduced padding for cleaner look */
              <div className="p-3 sm:p-4">
                <div className="divide-y divide-gray-100">
                  {cart.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="py-3 first:pt-0 last:pb-0"
                    >
                      {/* Cart Item Row - ADJUSTED: Compact spacing */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        {/* Image - ADJUSTED: Reduced size from 14/16 to 12/14 */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md"
                          />
                        </div>

                        {/* Name & Description - ADJUSTED: Smaller text */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 text-xs sm:text-sm truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {item.options?.summary || item.description || ""}
                          </p>
                        </div>

                        {/* ADJUSTED: Quantity & Price grouped together and centered */}
                        <div className="flex items-center gap-2">
                          {/* Quantity Controls - ADJUSTED: Compact height h-8 */}
                          <div className="flex items-center justify-center border border-gray-200 rounded h-8">
                            <button
                              onClick={() =>
                                updateQty(item.id, Math.max(1, item.qty - 1))
                              }
                              className="px-2 py-1 hover:bg-gray-50 transition-colors flex items-center justify-center"
                            >
                              <FiMinus className="text-xs" />
                            </button>
                            <div className="px-2 py-1 min-w-[1.5rem] text-center font-bold text-gray-700 text-xs">
                              {item.qty}
                            </div>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="px-2 py-1 hover:bg-gray-50 transition-colors flex items-center justify-center"
                            >
                              <FiPlus className="text-xs" />
                            </button>
                          </div>

                          {/* ADJUSTED: Price placed directly beside quantity with small gap-2 */}
                          <div className="text-sm font-bold text-orange-500 whitespace-nowrap">
                            ₦
                            {(
                              (item.unitPrice || 0) * item.qty
                            ).toLocaleString()}
                          </div>

                          {/* Delete Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex-shrink-0 text-gray-400 hover:text-red-500 p-1 transition-colors"
                            aria-label="Remove item"
                          >
                            <FiTrash2 className="text-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add More Items Link */}
                <div className="mt-3">
                  <Link
                    to="/menu"
                    className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium"
                  >
                    + Add more items from Chuks
                  </Link>
                </div>

                {/* Subtotal Section */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-sm sm:text-base font-medium text-gray-600">
                      Subtotal
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-orange-500">
                      ₦{subtotal.toLocaleString()}
                    </div>
                  </div>

                  {/* Checkout Button - Sized to fit content - reduced py/px */}
                  <div className="flex justify-end mt-4">
                    <Link
                      to="/orders"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm inline-block text-center"
                    >
                      Proceed to Checkout
                    </Link>
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
