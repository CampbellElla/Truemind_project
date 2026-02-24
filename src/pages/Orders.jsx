import { useMemo } from "react";
import Navbar from "../ui/Navbar.jsx";
import Footer from "../ui/Footer.jsx";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";

const Orders = () => {
  const { cart, updateQty, removeItem } = useCart();

  const subtotal = useMemo(
    () => cart.reduce((s, it) => s + (it.unitPrice || 0) * it.qty, 0),
    [cart],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full px-6 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-2xl font-bold mb-8">Your Cart</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cart.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-lg font-semibold">Your cart is empty.</p>
                <a
                  href="/menu"
                  className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Explore Menu
                </a>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4"
                  >
                    <div className="w-full md:w-48 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-gray-600">
                          {item.options?.summary || item.description || ""}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-3 md:mt-0 md:flex-1 md:justify-center">
                      <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                        <button
                          onClick={() =>
                            updateQty(item.id, Math.max(1, item.qty - 1))
                          }
                          className="px-3 py-2"
                        >
                          -
                        </button>
                        <div className="px-4 py-2">{item.qty}</div>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="px-3 py-2"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="w-full md:w-48 flex items-center justify-between md:justify-end gap-4 mt-3 md:mt-0">
                      <div className="text-lg font-bold text-orange-500">
                        ₦{((item.unitPrice || 0) * item.qty).toLocaleString()}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-500 hover:text-red-600 p-2"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="p-4 flex items-center justify-end gap-6">
                  <div className="text-sm text-gray-600">Subtotal</div>
                  <div className="text-lg font-bold text-orange-500">
                    ₦{subtotal.toLocaleString()}
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
