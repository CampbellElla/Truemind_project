import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../ui/Navbar.jsx";
import Footer from "../ui/Footer.jsx";
import { useCart } from "../context/CartContext.jsx";
import OrderSummary from "../ui/OrderSummary.jsx";
import useAddToCart from "../hooks/useAddToCart.js";

const mockFoods = [
  {
    id: 1,
    name: "Jollof Rice with Grilled Chicken",
    description:
      "Aromatic rice cooked in tomato sauce with perfectly grilled chicken",
    price: "₦2,500",
    priceValue: 2500,
    image: "/food11.png",
    proteins: [
      { id: "pc", label: "Fried Chicken", price: 0 },
      { id: "gr", label: "Grilled Chicken", price: 200 },
      { id: "bf", label: "Beef", price: 300 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
  {
    id: 2,
    name: "Jollof Rice with Chicken Nuggets",
    description:
      "With plantain, extra pepper sauce",
    price: "₦2,500",
    priceValue: 2500,
    image: "/food10.png",
    proteins: [
      { id: "pc", label: "Chicken Nuggets", price: 0 },
      { id: "gr", label: "Grilled Chicken", price: 200 },
      { id: "bf", label: "Beef", price: 300 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
  {
    id: 3,
    name: "Suya & Spicy Rice",
    description:
      "Aromatic rice cooked in tomato sauce with perfectly fried fish.",
    price: "₦2,800",
    priceValue: 2800,
    image: "/food6.png",
    proteins: [
      { id: "su", label: "Suya", price: 0 },
      { id: "gr", label: "Grilled Chicken", price: 200 },
      { id: "bf", label: "Beef", price: 300 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
  {
    id: 4,
    name: "Egusi Soup with Pounded Yam",
    description:
      "Creamy egusi soup with meat and fish, served with smooth pounded yam",
    price: "₦2,200",
    priceValue: 2200,
    image: "/food12.png",
    proteins: [
      { id: "bf", label: "Beef", price: 0 },
      { id: "ch", label: "Chicken", price: 200 },
      { id: "fi", label: "Fish", price: 300 },
    ],
    sides: [
      { id: "py", label: "Pounded Yam", price: 0 },
      { id: "fu", label: "Fufu", price: 150 },
      { id: "sg", label: "Semovita", price: 150 },
    ],
  },
  {
    id: 5,
    name: "Grilled Tilapia Fish",
    description: "Whole grilled tilapia seasoned with our special spices.",
    price: "₦4,500",
    priceValue: 4500,
    image: "/food19.png",
    proteins: [
      { id: "ti", label: "Tilapia", price: 0 },
      { id: "ct", label: "Catfish", price: 500 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "ri", label: "Rice", price: 150 },
    ],
  },
  {
    id: 6,
    name: "Jollof Rice & Fried Chicken",
    description:
      "Our signature jollof rice, served with crispy fried chicken and plantain.",
    price: "₦3,500",
    priceValue: 3500,
    image: "/food11.png",
    proteins: [
      { id: "fc", label: "Fried Chicken", price: 0 },
      { id: "gr", label: "Grilled Chicken", price: 200 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
  {
    id: 7,
    name: "Jollof Rice & Smoked Fish",
    description:
      "Flavorful Jollof rice served with perfectly smoked fish",
    price: "₦3,500",
    priceValue: 3500,
    image: "/food6.png",
    proteins: [
      { id: "sf", label: "Smoked Fish", price: 0 },
      { id: "gr", label: "Grilled Chicken", price: 200 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
  {
    id: 8,
    name: "Party Jollof Rice (Veg)",
    description: "Vegetarian party jollof, full of rich flavors",
    price: "₦2,800",
    priceValue: 2800,
    image: "/food11.png",
    proteins: [
      { id: "ve", label: "Vegetarian", price: 0 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
  {
    id: 81,
    name: "Party Jollof Rice (Veg)",
    description: "Vegetarian party jollof, full of rich flavors",
    price: "₦3,500",
    priceValue: 3500,
    image: "/food11.png",
    proteins: [
      { id: "ve", label: "Vegetarian", price: 0 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
  {
    id: 9,
    name: "Amala with Gbegiri & Ewedu",
    description:
      "Classic amala served with Gbegiri(beans) and Ewedu (jute leaf) soup.",
    price: "₦3,100",
    priceValue: 3100,
    image: "/food3.png",
    proteins: [
      { id: "bf", label: "Beef", price: 0 },
      { id: "ch", label: "Chicken", price: 200 },
      { id: "fi", label: "Fish", price: 300 },
    ],
    sides: [
      { id: "am", label: "Amala", price: 0 },
    ],
  },
  {
    id: 10,
    name: "Fufu & Okra Soup (Fish)",
    description:
      "Light fufu served with fresh okra soup and tiliapia fish.",
    price: "₦3,300",
    priceValue: 3300,
    image: "/food5.png",
    proteins: [
      { id: "fi", label: "Fish", price: 0 },
      { id: "bf", label: "Beef", price: 200 },
      { id: "ch", label: "Chicken", price: 200 },
    ],
    sides: [
      { id: "fu", label: "Fufu", price: 0 },
    ],
  },
  {
    id: 101,
    name: "Fufu & Okra Soup (Fish)",
    description:
      "Light fufu served with fresh okra soup and tiliapia fish.",
    price: "₦3,300",
    priceValue: 3300,
    image: "/food5.png",
    proteins: [
      { id: "fi", label: "Fish", price: 0 },
      { id: "bf", label: "Beef", price: 200 },
      { id: "ch", label: "Chicken", price: 200 },
    ],
    sides: [
      { id: "fu", label: "Fufu", price: 0 },
    ],
  },
  {
    id: 11,
    name: "Jollof Rice with Grilled Chicken",
    description:
      "Aromatic rice cooked in tomato sauce with perfectly grilled chicken",
    price: "₦2,500",
    priceValue: 2500,
    image: "/food11.png",
    proteins: [
      { id: "pc", label: "Fried Chicken", price: 0 },
      { id: "gr", label: "Grilled Chicken", price: 200 },
      { id: "bf", label: "Beef", price: 300 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
  {
    id: 41,
    name: "Egusi Soup with Pounded Yam",
    description:
      "Creamy egusi soup with meat and fish, served with smooth pounded yam",
    price: "₦2,200",
    priceValue: 2200,
    image: "/food12.png",
    proteins: [
      { id: "bf", label: "Beef", price: 0 },
      { id: "ch", label: "Chicken", price: 200 },
      { id: "fi", label: "Fish", price: 300 },
    ],
    sides: [
      { id: "py", label: "Pounded Yam", price: 0 },
      { id: "fu", label: "Fufu", price: 150 },
      { id: "sg", label: "Semovita", price: 150 },
    ],
  },
];

const FoodDetails = () => {
  const { id } = useParams();
  const foodId = parseInt(id, 10);
  const food = mockFoods.find((f) => f.id === foodId);
  
  // State hooks - must be called unconditionally
  const [selectedProtein, setSelectedProtein] = useState(food?.proteins?.[0]?.id || "");
  const [selectedSides, setSelectedSides] = useState([]);
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Cart hooks - must be called unconditionally
  const { addItem, selectItem } = useCart();
  const { cartMessage, handleAddToCart: showToastAndRedirect, redirectToOrderSummary } = useAddToCart();

  // If food not found, show message
  if (!food) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-700">Item not found</h2>
            <p className="text-gray-500 mt-2">This food item is not available.</p>
            <a href="/explore" className="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded">Back to Menu</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const toggleSide = (sideId) => {
    setSelectedSides((prev) =>
      prev.includes(sideId)
        ? prev.filter((s) => s !== sideId)
        : [...prev, sideId],
    );
  };

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => q + 1);

  const parsePrice = (priceStr) =>
    parseInt((priceStr || "").replace(/[^0-9]/g, ""), 10) || 0;

  // IMPROVEMENT: Renamed to handleAddToCartWithOptions to avoid conflict
  const handleAddToCartWithOptions = () => {
    const base = parsePrice(food.price);
    const protein = food.proteins.find((p) => p.id === selectedProtein) || {
      price: 0,
      label: "",
    };
    const sidesSelected = food.sides.filter((s) =>
      selectedSides.includes(s.id),
    );
    const sidesTotal = sidesSelected.reduce((s, it) => s + it.price, 0);

    const unitPrice = base + (protein.price || 0) + sidesTotal;

    const options = {
      protein: protein.label,
      sides: sidesSelected.map((s) => s.label),
      summary: `${protein.label}${sidesSelected.length ? ` · ${sidesSelected.map((s) => s.label).join(", ")}` : ""}`,
      notes,
    };

    addItem({
      id: food.id,
      name: food.name,
      image: food.image,
      description: food.description,
      unitPrice,
      qty: quantity,
      options,
    });
    
    // IMPROVEMENT: Show toast and redirect to Order Summary
    showToastAndRedirect(food.name, null, redirectToOrderSummary);
  };

  /**
   * Handle card click to show Order Summary
   * This allows users to see the summary when clicking on the food item details
   */
  const handleFoodClick = () => {
    selectItem({
      id: food.id,
      name: food.name,
      image: food.image,
      description: food.description,
      price: food.price,
      priceValue: food.priceValue || parsePrice(food.price),
    });
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />

      <main className="flex-grow w-full px-6 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image */}
          <div className="cursor-pointer" onClick={handleFoodClick}>
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{food.name}</h1>
            <div className="text-lg font-bold text-orange-500">
              {food.price}
            </div>
            <p className="text-sm text-gray-700">{food.description}</p>

            {/* Tags */}
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                Highly rated
              </span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                View Reviews
              </span>
            </div>

            {/* Protein Options */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="font-semibold mb-3">Choose Your Protein</h3>
              <div className="space-y-2">
                {food.proteins.map((p) => (
                  <label
                    key={p.id}
                    className="flex items-center justify-between border border-gray-200 rounded px-3 py-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="protein"
                        value={p.id}
                        checked={selectedProtein === p.id}
                        onChange={() => setSelectedProtein(p.id)}
                      />
                      <span className="font-medium">{p.label}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {p.price > 0 ? `+₦${p.price}` : null}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Extra Sides */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="font-semibold mb-3">Extra Sides (Optional)</h3>
              <div className="space-y-2">
                {food.sides.map((s) => (
                  <label
                    key={s.id}
                    className="flex items-center justify-between border border-gray-200 rounded px-3 py-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        value={s.id}
                        checked={selectedSides.includes(s.id)}
                        onChange={() => toggleSide(s.id)}
                      />
                      <span>{s.label}</span>
                    </div>
                    <div className="text-sm text-gray-600">+₦{s.price}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <h3 className="font-semibold mb-2">Special Instructions</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-200 rounded p-3 text-sm"
                rows={4}
                placeholder="Add any special requests (optional)"
              />
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                <button onClick={increase} className="px-3 py-2">
                  +
                </button>
                <div className="w-12 text-center tabular-nums">{quantity}</div>
                <button onClick={decrease} className="px-3 py-2">
                  -
                </button>
              </div>

              <button
                onClick={handleAddToCartWithOptions}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Order Summary - Shows when the food item image is clicked */}
      <OrderSummary />

      {/* Cart Message Toast - IMPROVEMENT: Added toast notification */}
      {cartMessage && (
        <div className="fixed bottom-8 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {cartMessage}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FoodDetails;
